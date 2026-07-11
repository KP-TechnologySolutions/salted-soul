#!/usr/bin/env bash
# Deploy the static export to the OWNER's DreamHost account (production).
#
# Target: saltedsoulsc.com — hosted on the client's own DreamHost shared plan
# (separate from KP's account). The dh_sw69qz user is SFTP-only (SSH toggle off),
# so we mirror with lftp over SFTP, not rsync.
#
# The password is read from the DH_PASS env var — never hardcode it here.
#
# Usage:
#   DH_PASS='the-sftp-password' ./deploy-production.sh
#
# Once Shell access is enabled for the user in the DreamHost panel, this can move
# to key-based rsync instead (cleaner, no password in the environment).
set -euo pipefail

HOST="iad1-shared-b7-45.dreamhost.com"
USER="dh_sw69qz"
REMOTE_DIR="saltedsoulsc.com/"   # web root: /home/dh_sw69qz/saltedsoulsc.com/
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)/out"
: "${DH_PASS:?Set DH_PASS env var with the dh_sw69qz SFTP password}"

echo "==> Building static export (pulls live Shopify catalog via prebuild)"
npm run build
find out -name "*.txt" -delete   # strip RSC .txt files (not for production)

echo "==> Deploying $LOCAL_DIR -> $USER@$HOST:$REMOTE_DIR (SFTP)"
lftp -u "$USER,$DH_PASS" "sftp://$HOST" -e "
  set sftp:auto-confirm yes;
  set net:timeout 20;
  set net:max-retries 3;
  set mirror:parallel-transfer-count 4;
  mirror -R --no-perms --delete --verbose=1 '$LOCAL_DIR/' '$REMOTE_DIR';
  bye
"
echo "==> Done. Live at https://saltedsoulsc.com/"
