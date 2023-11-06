#!/bin/bash
MAIN_PATH="$(npm config get prefix)/lib/node_modules/@figure-config/cli/dist/main.js"

EXTRA_NODE_ARGS=()
OTHER_ARGS=()

# idiomatic parameter and option handling in sh
while test $# -gt 0
do
    case "$1" in
        --debug)
            EXTRA_NODE_ARGS+=(--inspect-brk)
            ;;
        *)
            OTHER_ARGS+=("$1")
            ;;
    esac
    shift
done

# If the last command was successful (exit status 0), use 'bun'
if ! [ -x "$(command -v bun)" ]; then
  # When calling node, only use EXTRA_NODE_ARGS if it's not empty
  if [ ${#EXTRA_NODE_ARGS[@]} -eq 0 ]; then
    node "$MAIN_PATH" "${OTHER_ARGS[@]}"
  else
    node "${EXTRA_NODE_ARGS[@]}" "$MAIN_PATH" "${OTHER_ARGS[@]}"
  fi
else
  # Uncomment the bun line and adjust accordingly if you want to use bun
  if [ ${#EXTRA_NODE_ARGS[@]} -eq 0 ]; then
    bun "$MAIN_PATH" "${OTHER_ARGS[@]}"
  else
    bun "${EXTRA_NODE_ARGS[@]}" "$MAIN_PATH" "${OTHER_ARGS[@]}"
  fi
fi
