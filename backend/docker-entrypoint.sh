#!/bin/sh
npx drizzle-kit migrate --config=./drizzle.config.ts
exec "$@"
