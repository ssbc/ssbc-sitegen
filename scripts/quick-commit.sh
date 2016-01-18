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

echo "---"
echo "ssbc.github.io"
cd ~/ssbc.github.io
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "patchwork"
cd ~/patchwork
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "secure-scuttlebutt"
cd ~/secure-scuttlebutt
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "scuttlebot"
cd ~/scuttlebot
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "docs"
cd ~/ssb-docs
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-feed"
cd ~/ssb-feed
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-Ref"
cd ~/ssb-ref
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-Keys"
cd ~/ssb-keys
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-Config"
cd ~/ssb-config
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "Secret Stack"
cd ~/secret-stack
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "Muxrpc"
cd ~/muxrpc
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-Msg-Schemas"
cd ~/ssb-msg-schemas
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-Msgs"
cd ~/ssb-msgs
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-client"
cd ~/ssb-client
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "SSB-markdown"
cd ~/ssb-markdown
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "patchwork-threads"
cd ~/patchwork-threads
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "muxrpcli"
cd ~/muxrpcli
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "mdmanifest"
cd ~/mdmanifest
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "Blessed Dashboard"
cd ~/ssb-blessed-dashboard
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "Example Whois"
cd ~/ssb-example-whois
git checkout gh-pages &>/dev/null
git status -s -b
subshell


echo "---"
echo "Example PM"
cd ~/ssb-example-pm
git checkout gh-pages &>/dev/null
git status -s -b
subshell

