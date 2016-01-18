module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Feed - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-feed',
    content: gen.readMD('README.md')
  })
}