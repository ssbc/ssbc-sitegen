module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Publish Encrypted Messages - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-publish-encrypted-messages.html',
    content: gen.readMD('scuttlebot/howto-publish-encrypted-messages.md')
  })
}