#!/bin/bash

if [ -z $1 ]; then
  echo "This is a convenience script written by Paul, for Paul's computer."
  echo "Review the source before running it, so you understand what will happen."
  exit
fi

echo "Building Home"
cd ~/ssbc.github.io
git checkout master
~/ssbc-sitegen/index.js home

echo "Building Patchwork"
cd ~/patchwork
git checkout gh-pages
~/ssbc-sitegen/index.js patchwork

echo "Building Secure Scuttlebutt"
cd ~/secure-scuttlebutt
git checkout gh-pages
~/ssbc-sitegen/index.js secure-scuttlebutt

echo "Building Scuttlebot"
cd ~/scuttlebot
git checkout gh-pages
~/ssbc-sitegen/index.js scuttlebot

echo "Building Docs"
cd ~/ssb-docs
git checkout gh-pages
~/ssbc-sitegen/index.js docs

echo "Building SSB-Ref"
cd ~/ssb-ref
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-ref

echo "Building SSB-Keys"
cd ~/ssb-keys
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-keys

echo "Building SSB-Config"
cd ~/ssb-config
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-config

echo "Building Secret Stack"
cd ~/secret-stack
git checkout gh-pages
~/ssbc-sitegen/index.js secret-stack

echo "Building Muxrpc"
cd ~/muxrpc
git checkout gh-pages
~/ssbc-sitegen/index.js muxrpc

echo "Building SSB-Msg-Schemas"
cd ~/ssb-msg-schemas
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-msg-schemas

echo "Building SSB-Msgs"
cd ~/ssb-msgs
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-msgs

echo "Building SSB-feed"
cd ~/ssb-feed
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-feed

echo "Building SSB-client"
cd ~/ssb-client
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-client

echo "Building SSB-markdown"
cd ~/ssb-markdown
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-markdown

echo "Building muxrpcli"
cd ~/muxrpcli
git checkout gh-pages
~/ssbc-sitegen/index.js muxrpcli

echo "Building mdmanifest"
cd ~/mdmanifest
git checkout gh-pages
~/ssbc-sitegen/index.js mdmanifest

echo "Building patchwork-threads"
cd ~/patchwork-threads
git checkout gh-pages
~/ssbc-sitegen/index.js patchwork-threads

echo "Building Blessed Dashboard"
cd ~/ssb-blessed-dashboard
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-blessed-dashboard

echo "Building Example Whois"
cd ~/ssb-example-whois
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-example-whois

echo "Building Example PM"
cd ~/ssb-example-pm
git checkout gh-pages
~/ssbc-sitegen/index.js ssb-example-pm