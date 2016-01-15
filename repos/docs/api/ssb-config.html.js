module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Config - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/ssb-config.html',
    content: gen.readMD('api/ssb-config.md')
  })
}