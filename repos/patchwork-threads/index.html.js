module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'patchwork-threads - Documentation - SSBC',
    section: '/docs',
    path: '/patchwork-threads',
    content: gen.readMD('README.md')
  })
}