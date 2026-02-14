#!/usr/bin/env bash
# start-server.sh

# Optional: clean old _site folder
rm -rf _site 2>/dev/null

# Run in background, log to file, no hangup
nohup bundle exec jekyll serve --host 127.0.0.1 --port 4000 > jekyll.log 2>&1 &

echo "Jekyll server started in background."
echo "PID: $!"
echo "Logs: jekyll.log"
echo "Stop with: kill \$(cat .jekyll-pid)  or  pkill -f jekyll"
