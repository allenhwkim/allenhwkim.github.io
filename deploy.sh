#!/bin/bash -vx
# show each command that runs
# run command only if previous command ran successfully

git pull
cp -R ../allenkim.me/build/* .
git diff
git add -A
read -p "Please confirm this changes to commit " -n 1 -r
git commit -m"updated"
git push
