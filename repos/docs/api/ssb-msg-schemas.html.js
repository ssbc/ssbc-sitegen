module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Msg-Schemas - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/ssb-msg-schemas.html',
    content: gen.readMD('api/ssb-msg-schemas.md')
  })
}