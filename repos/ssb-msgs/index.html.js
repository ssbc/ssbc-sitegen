module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Msgs - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-msgs',
    content: gen.readMD('README.md')
  })
}