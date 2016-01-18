module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-markdown - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-markdown',
    content: gen.readMD('README.md')
  })
}