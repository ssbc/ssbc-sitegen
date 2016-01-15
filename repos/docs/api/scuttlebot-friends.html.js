module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Friends Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-friends.html',
    content: gen.readMD('api/scuttlebot-friends.md')
  })
}