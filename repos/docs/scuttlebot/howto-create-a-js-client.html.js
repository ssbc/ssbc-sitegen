module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Create a JS Client - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-create-a-js-client.html',
    content: gen.readMD('scuttlebot/howto-create-a-js-client.md')
  })
}