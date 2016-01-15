module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Publish a Post - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-publish-a-post.html',
    content: gen.readMD('scuttlebot/howto-publish-a-post.md')
  })
}