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