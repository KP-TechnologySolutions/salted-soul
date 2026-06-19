#!/usr/bin/env bash
# Deploy the static export to DreamHost (vps27305) over SFTP.
#
# The dh_gdnd34 user is SFTP-only (no shell), so we use lftp mirror, not rsync.
# The password is read from the DH_PASS env var — never hardcode it here.
#
# Usage:
#   DH_PASS='the-password' ./deploy-dreamhost.sh
#
# Once Shell access is enabled for the user in the DreamHost panel, you can
# switch to key-based rsync instead (cleaner, no password):
#   rsync -avz --delete -e "ssh -i ~/.ssh/kp_dreamhost_deploy" out/ \
#     dh_gdnd34@vps27305.dreamhostps.com:saltedsoulsc.dreamhosters.com/
set -euo pipefail

HOST="vps27305.dreamhostps.com"
USER="dh_gdnd34"
REMOTE_DIR="saltedsoulsc.dreamhosters.com/"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)/out"
: "${DH_PASS:?Set DH_PASS env var with the dh_gdnd34 password}"

echo "==> Building static export"
npm run build
find out -name "*.txt" -delete   # strip RSC .txt files

echo "==> Deploying $LOCAL_DIR -> $USER@$HOST:$REMOTE_DIR (SFTP)"
lftp -u "$USER,$DH_PASS" "sftp://$HOST" -e "
  set sftp:auto-confirm yes;
  set net:timeout 20;
  set net:max-retries 3;
  set mirror:parallel-transfer-count 4;
  mirror -R --no-perms --delete --verbose=1 '$LOCAL_DIR/' '$REMOTE_DIR';
  bye
"
echo "==> Done. Live at http://saltedsoulsc.dreamhosters.com/ (once DNS is active)"
