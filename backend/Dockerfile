FROM node:22-slim AS builder
WORKDIR /app

COPY package*.json ./
COPY backend/package*.json ./backend/

RUN npm ci --include=optional

COPY backend/ ./backend/
ARG FRONTEND_URL
ENV FRONTEND_URL=$FRONTEND_URL

WORKDIR /app/backend
RUN npm run build

FROM builder AS testing
WORKDIR /app/backend
ENV NODE_ENV=test
CMD ["npx", "vitest", "run"]

FROM node:22-slim AS runner
WORKDIR /app/backend
ENV NODE_ENV=production

COPY package*.json ../
COPY backend/package*.json ./

RUN npm ci --only=production

COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/drizzle.config.ts ./
COPY --from=builder /app/backend/drizzle ./drizzle
COPY backend/docker-entrypoint.sh ./

RUN chmod +x ./docker-entrypoint.sh

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/server.js"] 
