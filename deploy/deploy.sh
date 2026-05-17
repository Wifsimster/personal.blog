#!/bin/bash
set -euo pipefail

# Authoritative production deploy script for the blog.
# Invoked by the Release workflow (.github/workflows/release.yml) on the
# self-hosted runner. Pulls the freshly published image, restarts the
# container, verifies the live site responds, and rolls back on failure.
#
# Overridable via environment:
#   BLOG_COMPOSE_DIR  directory holding compose.yml      (default /opt/blog)
#   BLOG_HEALTH_URL   URL probed to confirm the deploy   (default public site)

COMPOSE_DIR="${BLOG_COMPOSE_DIR:-/opt/blog}"
HEALTH_URL="${BLOG_HEALTH_URL:-https://blog.battistella.ovh/}"
CONTAINER="wifsimster-blog"
IMAGE="wifsimster/wifsimster-blog:latest"

cd "$COMPOSE_DIR"

# Record the currently-running image so a bad release can be rolled back.
PREVIOUS_IMAGE="$(docker inspect --format '{{.Image}}' "$CONTAINER" 2>/dev/null || true)"

echo "Pulling latest image..."
docker compose pull blog

echo "Restarting service..."
docker compose up -d blog

# Poll the live site instead of trusting `up -d`, which returns as soon as the
# container *starts* — not when it actually serves content.
verify() {
  for attempt in $(seq 1 10); do
    if curl -fsSL --max-time 5 "$HEALTH_URL" >/dev/null 2>&1; then
      echo "Health check passed (attempt ${attempt})."
      return 0
    fi
    echo "Health check attempt ${attempt} failed; retrying in 3s..."
    sleep 3
  done
  return 1
}

if verify; then
  echo "Deploy verified. Cleaning up dangling images..."
  docker image prune -f
  echo "Deploy complete!"
else
  echo "ERROR: deployment failed health checks at ${HEALTH_URL}" >&2
  if [ -n "$PREVIOUS_IMAGE" ]; then
    echo "Rolling back to previous image (${PREVIOUS_IMAGE})..." >&2
    docker tag "$PREVIOUS_IMAGE" "$IMAGE"
    docker compose up -d blog
    echo "Rollback complete. Investigate the failed release before retrying." >&2
  else
    echo "No previous image recorded; manual intervention required." >&2
  fi
  exit 1
fi
