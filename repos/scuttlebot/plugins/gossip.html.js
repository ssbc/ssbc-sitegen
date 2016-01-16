module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Gossip Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/gossip.html',
    content: gen.readMD('plugins/gossip.md')
  })
}