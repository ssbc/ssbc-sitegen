#!/bin/bash

if [ -z $1 ]; then
  echo "This is a convenience script written by Paul, for Paul's computer."
  echo "Review the source before running it, so you understand what will happen."
  exit
fi

function subshell() {
  # https://serverfault.com/questions/368054/run-an-interactive-bash-subshell-with-initial-commands-without-returning-to-the
  bash --init-file <(echo "alias s=\"git status\";alias c=\"git commit -m\";alias co=\"git checkout\";alias a=\"git add\";alias b=\"git branch\";alias push=\"git push\";alias pull=\"git pull\";alias d=\"git diff\";alias dc=\"git diff --cached\"")
}

function quickcommit() {
  echo "---"
  echo $1
  cd "${HOME}/${1}"
  git checkout gh-pages
  git status -s -b
  subshell
}

quickcommit ssbc.github.io
quickcommit patchwork
quickcommit secure-scuttlebutt
quickcommit scuttlebot
quickcommit ssb-docs
quickcommit ssb-feed
quickcommit ssb-ref
quickcommit ssb-keys
quickcommit ssb-config
quickcommit secret-stack
quickcommit muxrpc
quickcommit ssb-msg-schemas
quickcommit ssb-msgs
quickcommit ssb-client
quickcommit ssb-markdown
quickcommit patchwork-threads
quickcommit muxrpcli
quickcommit mdmanifest
quickcommit ssb-blessed-dashboard
quickcommit ssb-example-whois
quickcommit ssb-example-pm
