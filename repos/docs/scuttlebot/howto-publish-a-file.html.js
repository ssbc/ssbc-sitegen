module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Publish a File - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-publish-a-file.html',
    content: gen.readMD('scuttlebot/howto-publish-a-file.md')
  })
}