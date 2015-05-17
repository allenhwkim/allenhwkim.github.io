#!/bin/bash -evx
# show each command that runs
# run command only if previous command ran successfully

git pull
cp -R ../allenkim.me/build/* .
git status
read -p "Please confirm this changes to commit " -n 1 -r
git add -A
git commit -m"updated"
git push
