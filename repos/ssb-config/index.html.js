module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Config - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-config',
    content: gen.readMD('README.md')
  })
}