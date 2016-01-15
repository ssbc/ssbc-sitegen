module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Keys - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/ssb-keys.html',
    content: gen.readMD('api/ssb-keys.md')
  })
}