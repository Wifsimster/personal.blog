# Build args
ARG VERSION=0.0.0
ARG BUILD_DATE
ARG VCS_REF

# Build stage
FROM node:24-alpine AS build

WORKDIR /app

# Re-declare build-time args inside the stage so they're visible to `npm run build`.
# Vite only inlines env vars prefixed with VITE_ into the client bundle, and they
# must be present in the process env when `vite build` runs — hence the ENV line.
ARG VITE_STATS_URL
ENV VITE_STATS_URL=${VITE_STATS_URL}

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Re-declare the global build args so they're visible to LABEL in this stage.
# ARGs declared before the first FROM are only in scope for FROM lines.
ARG VERSION=0.0.0
ARG BUILD_DATE
ARG VCS_REF

# OCI metadata labels
LABEL org.opencontainers.image.title="wifsimster-blog" \
      org.opencontainers.image.description="Blog personnel - DIY, domotique et projets électroniques" \
      org.opencontainers.image.version="${VERSION}" \
      org.opencontainers.image.created="${BUILD_DATE}" \
      org.opencontainers.image.revision="${VCS_REF}" \
      org.opencontainers.image.source="https://github.com/wifsimster/personal.blog"

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
