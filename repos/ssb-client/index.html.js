module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Client - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-client',
    content: gen.readMD('README.md')
  })
}