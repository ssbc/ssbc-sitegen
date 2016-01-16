module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Friends Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/friends.html',
    content: gen.readMD('plugins/friends.md')
  })
}