module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'FAQ - Scuttlebot - SSBC',
    section: '/docs',
    path: '/docs/ssb/faq.html',
    content: gen.readMD('ssb/faq.md')
  })
}