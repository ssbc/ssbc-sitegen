#! /usr/bin/env node
var argv = require('yargs').argv
var gen = require('./gen')

const REPOS = {
  home: { id: 'home' },
  patchwork: { id: 'patchwork' },
  'secure-scuttlebutt': { id: 'secure-scuttlebutt' },
  scuttlebot: { id: 'scuttlebot' },
  docs: { id: 'docs' },
  'ssb-feed': { id: 'ssb-feed' },
  'ssb-msgs': { id: 'ssb-msgs' },
  'ssb-msg-schemas': { id: 'ssb-msg-schemas' },
  'ssb-ref': { id: 'ssb-ref' },
  'ssb-keys': { id: 'ssb-keys' },
  'ssb-config': { id: 'ssb-config' },
  'ssb-markdown': { id: 'ssb-markdown' },
  'ssb-client': { id: 'ssb-client' },
  'patchwork-threads': { id: 'patchwork-threads' },
  'muxrpcli': { id: 'muxrpcli' },
  'mdmanifest': { id: 'mdmanifest' },
  'secret-stack': { id: 'secret-stack' },
  'muxrpc': { id: 'muxrpc' },
  'ssb-blessed-dashboard': { id: 'ssb-blessed-dashboard' },
  'ssb-example-whois': { id: 'ssb-example-whois' },
  'ssb-example-pm': { id: 'ssb-example-pm' },
}

const argvRepo = argv._[0]
if (!argvRepo) {
  usage()
  process.exit(1)
}

var repo = REPOS[argvRepo]
if (!repo) {
  console.log(argvRepo,'is not a valid repo.\n')
  usage()
  process.exit(2)
}

gen.buildRepo(repo)

function usage () {
  console.log('ssbc-sitegen <repo>')
  console.log('Call this utility from the gh-pages branch of the target repo to generate the site assets.')
  console.log('')
  console.log('  Supported repos:', Object.keys(REPOS).join(', '))
}