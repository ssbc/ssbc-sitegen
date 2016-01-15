module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Announce a Pub Server - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-announce-a-pub-server.html',
    content: gen.readMD('scuttlebot/howto-announce-a-pub-server.md')
  })
}