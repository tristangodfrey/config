#!/bin/bash

# Check if 'bun' is available in the PATH

CURRENT_DIR=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
PARENT_DIR=$(cd "$(dirname "$CURRENT_DIR")"; pwd -P )

#If the last command was successful (exit status 0), use 'bun'
if ! [ -x "$(command -v bun)" ]; then
  node "$PARENT_DIR/dist/main.js" "$@"
else
  bun "$PARENT_DIR/src/main.ts" "$@"
fi
