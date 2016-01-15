module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Patchwork - SSBC',
    section: '/patchwork',
    path: '/patchwork',
    content: gen.readMD('README.md')
  })
}