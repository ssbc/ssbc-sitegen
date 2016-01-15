module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Setup a Pub - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-setup-a-pub.html',
    content: gen.readMD('scuttlebot/howto-setup-a-pub.md')
  })
}