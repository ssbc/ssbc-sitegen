module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot.html',
    content: gen.readMD('api/scuttlebot.md')
  })
}