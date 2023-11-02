#!/bin/bash

# Check if 'bun' is available in the PATH

PARENT_DIR="$(dirname "$(dirname "$0")")"

#If the last command was successful (exit status 0), use 'bun'
if ! [ -x "$(command -v bun)" ]; then
  node "$PARENT_DIR/dist/main.js" "$@"
else
  bun "$PARENT_DIR/src/main.ts" "$@"
#  node "$PARENT_DIR/dist/main.js" "$@"
fi
