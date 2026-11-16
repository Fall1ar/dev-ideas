#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
printf 'IDEA DECK is running at http://127.0.0.1:4173\nPress Ctrl+C to stop.\n'
python3 -m http.server 4173 --bind 127.0.0.1
