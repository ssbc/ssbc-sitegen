var marked = require('marked')
var fs = require('fs')
var pathlib = require('path')

// build all the assets in a repo
// - `repo` object
//   - `repo.id` string: which repo
module.exports.buildRepo = function (repo) {
  console.log('Building', repo.id, '...')

  function buildFile (rootpath, subdir) {
    subdir = subdir || ''
    return function (file) {
      if (file.match(/\.js$/) !== null) {
        var name = file.replace('.js', '')
        var outpath = pathlib.join(process.cwd(), subdir + name)
        module.exports.build(outpath, require(rootpath+name))
      }
      else if (file.match(/\.txt$/) !== null) {
        var name = file.replace('.txt', '')
        var inpath = pathlib.join(__dirname, rootpath, file)
        var outpath = pathlib.join(process.cwd(), name)
        console.log('== Copying', inpath, 'to', outpath,'==')
        fs.writeFileSync(outpath, fs.readFileSync(inpath, 'utf-8'))
      }
      else {
        var newrootpath = pathlib.join(rootpath, file)
        fs.readdirSync(pathlib.join(__dirname, newrootpath)).forEach(buildFile('./'+newrootpath+'/', file+'/'))
      }
    }
  }

  // repo assets
  fs.readdirSync(pathlib.join(__dirname, 'repos', repo.id)).forEach(buildFile('./repos/'+repo.id+'/'))

  // common assets
  fs.readdirSync(pathlib.join(__dirname, 'common')).forEach(buildFile('./common/'))
}

// write a text file to `path` with the given `template`
// - `path` string: the file to output
// - `template` generator: yields strings which will be concatted to make the file
module.exports.build = function (path, template) {
  console.log('== Generating', path, '==')
  var content = module.exports.tmpl(template)
  fs.writeFileSync(path, content, 'utf-8')
  console.log('Done.')
}

// run a generator to produce an output
// - `template` generator: yields strings which will be concatted to make the file
module.exports.tmpl = function (template) {
  var content = ''
  for (var part of template(module.exports)) {
    content += part
  }
  return content
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