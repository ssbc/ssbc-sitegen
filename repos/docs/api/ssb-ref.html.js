module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Ref - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/ssb-ref.html',
    content: gen.readMD('api/ssb-ref.md')
  })
}