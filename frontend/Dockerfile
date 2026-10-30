FROM node:22-slim AS builder
WORKDIR /app

COPY package*.json ./
COPY frontend/package*.json ./frontend/

RUN npm ci

COPY frontend/ ./frontend/
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
WORKDIR /app/frontend
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN mkdir -p /app/frontend/.next/cache && chown -R node:node /app
USER node

COPY --from=builder --chown=node:node /app/frontend/public ./frontend/public
COPY --from=builder --chown=node:node /app/frontend/.next/standalone ./
COPY --from=builder --chown=node:node /app/frontend/.next/static ./frontend/.next/static

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "frontend/server.js"]
