module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Ref - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-ref',
    content: gen.readMD('README.md')
  })
}