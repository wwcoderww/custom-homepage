FROM node:22-slim AS builder
WORKDIR /app

COPY package*.json ./
COPY backend/package*.json ./backend/

RUN npm ci

COPY backend/ ./backend/
WORKDIR /app/backend
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY backend/package*.json ./backend/

RUN npm ci --only=production

COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/node_modules ./node_modules
COPY --from=builder /app/backend/drizzle.config.ts ./backend/

COPY --from=builder /app/backend/drizzle ./backend/drizzle

COPY backend/docker-entrypoint.sh ./backend/
RUN chmod +x ./backend/docker-entrypoint.sh

EXPOSE 8080
ENTRYPOINT ["/app/backend/docker-entrypoint.sh"]
CMD ["node", "dist/server.js"]