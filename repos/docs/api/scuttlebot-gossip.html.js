module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Gossip Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-gossip.html',
    content: gen.readMD('api/scuttlebot-gossip.md')
  })
}