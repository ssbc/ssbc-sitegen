module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Msg-Schemas - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-msg-schemas',
    content: gen.readMD('README.md')
  })
}