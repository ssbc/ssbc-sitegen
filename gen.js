var marked = require('marked')
var fs = require('fs')
var pathlib = require('path')

// build all the assets in a repo
// - `repo` object
//   - `repo.id` string: which repo
module.exports.buildRepo = function (repo) {
  console.log('Building', repo.id, '...')

  // repo assets
  fs.readdirSync(pathlib.join(__dirname, 'repos', repo.id)).forEach(function(file) {
    if (file.match(/\.js$/) !== null) {
      var name = file.replace('.js', '')
      var outpath = pathlib.join(process.cwd(), name)
      module.exports.build(outpath, require('./repos/'+repo.id+'/'+name))
    }
  })

  // common assets
  fs.readdirSync(pathlib.join(__dirname, 'common')).forEach(function(file) {
    if (file.match(/\.js$/) !== null) {
      var name = file.replace('.js', '')
      var outpath = pathlib.join(process.cwd(), name)
      module.exports.build(outpath, require('./common/'+name))
    }
  })
}

// write a text file to `path` with the given `template`
// - `path` string: the file to output
// - `template` generator: yields strings which will be concatted to make the file
module.exports.build = function (path, template) {
  console.log('== Generating', path, '==')
  var content = ''
  for (var part of template(module.exports)) {
    content += part
  }
  fs.writeFileSync(path, content, 'utf-8')
  console.log('Done.')
}

// read a text file
// - `path` string: the file to read
module.exports.read = function (path) {
  console.log('Reading file', path)
  return fs.readFileSync(path, 'utf-8')
}

// read a markdown file and convert to HTML
// - `path` string: the file to read
module.exports.readMD = function (path) {
  console.log('Reading Markdown', path, 'and converting to HTML')
  return marked(fs.readFileSync(path, 'utf-8'))
}

module.exports.partials = require('./partials')