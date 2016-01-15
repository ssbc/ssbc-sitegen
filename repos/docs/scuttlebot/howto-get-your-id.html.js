module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Get Your ID - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-get-your-id.html',
    content: gen.readMD('scuttlebot/howto-get-your-id.md')
  })
}