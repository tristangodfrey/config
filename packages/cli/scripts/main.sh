#!/bin/bash

# Check if 'bun' is available in the PATH
command -v bun >/dev/null 2>&1

PARENT_DIR="$(dirname "$(dirname "$0")")"

# If the last command was successful (exit status 0), use 'bun'
if [ $? -eq 0 ]; then
    bun "$PARENT_DIR/src/main.ts" "$@"
else
    node "$../dist/main.js" "$@"
fi
