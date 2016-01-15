module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Documentation - SSBC',
    section: '/docs',
    path: '/docs',
    content: gen.readMD('README.md')
  })
}