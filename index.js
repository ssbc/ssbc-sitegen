#! /usr/bin/env node
var argv = require('yargs').argv
var gen = require('./gen')

const REPOS = {
  docs: { id: 'docs' },
  'secure-scuttlebutt': { id: 'secure-scuttlebutt' }
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