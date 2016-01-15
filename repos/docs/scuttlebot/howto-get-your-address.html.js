module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Get Your Address - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-get-your-address.html',
    content: gen.readMD('scuttlebot/howto-get-your-address.md')
  })
}