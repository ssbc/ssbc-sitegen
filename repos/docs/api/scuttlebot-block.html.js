module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Block Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-block.html',
    content: gen.readMD('api/scuttlebot-block.md')
  })
}