module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Install - Patchwork - SSBC',
    section: '/patchwork',
    path: '/docs/patchwork/install.html',
    content: gen.readMD('patchwork/install.md')
  })
}