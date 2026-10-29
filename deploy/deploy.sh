#!/bin/bash
set -euo pipefail

COMPOSE_DIR="${BLOG_COMPOSE_DIR:-/opt/docker/personal-blog}"
HEALTH_URL="${BLOG_HEALTH_URL:-https://blog.battistella.ovh/}"
CONTAINER="personal-blog"
SERVICE="personal-blog"
IMAGE="wifsimster/wifsimster-blog:latest"

cd "$COMPOSE_DIR"

PREVIOUS_IMAGE="$(docker inspect --format '{{.Image}}' "$CONTAINER" 2>/dev/null || true)"

echo "Pulling latest image..."
docker compose pull "$SERVICE"

echo "Restarting service..."
docker compose up -d "$SERVICE"

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
    docker compose up -d "$SERVICE"
    echo "Rollback complete. Investigate the failed release before retrying." >&2
  else
    echo "No previous image recorded; manual intervention required." >&2
  fi
  exit 1
fi
