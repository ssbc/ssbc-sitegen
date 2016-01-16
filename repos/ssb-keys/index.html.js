module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'SSB-Keys - Documentation - SSBC',
    section: '/docs',
    path: '/ssb-keys',
    content: gen.readMD('README.md')
  })
}