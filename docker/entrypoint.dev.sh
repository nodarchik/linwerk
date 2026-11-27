#!/bin/sh
set -eu

cd /app

if [ ! -f package-lock.json ]; then
  echo "package-lock.json is missing. Mount the website directory at /app." >&2
  exit 1
fi

lock_hash="$(sha256sum package-lock.json | awk '{print $1}')"
stamp="node_modules/.package-lock.sha256"

if [ ! -d node_modules/next ] || [ ! -f "$stamp" ] || [ "$(cat "$stamp")" != "$lock_hash" ]; then
  echo "Installing dependencies..."
  npm ci
  printf '%s\n' "$lock_hash" > "$stamp"
fi

# Webpack's watcher follows the host file events that reach this container. Turbopack's does not.
exec npm run dev -- --webpack --hostname 0.0.0.0 --port 3000
