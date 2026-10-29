echo "Executing database schema migrations via Drizzle Kit..."
npx drizzle-kit migrate

echo "Launching backend application server..."
exec "$@"