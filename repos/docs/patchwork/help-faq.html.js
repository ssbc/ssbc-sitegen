module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Help / FAQ - Patchwork - SSBC',
    section: '/patchwork',
    path: '/docs/patchwork/help-faq.html',
    content: gen.readMD('patchwork/help-faq.md')
  })
}