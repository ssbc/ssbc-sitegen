module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Msgs - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/ssb-msgs.html',
    content: gen.readMD('api/ssb-msgs.md')
  })
}