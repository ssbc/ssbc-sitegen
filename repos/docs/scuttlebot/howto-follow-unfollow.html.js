module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Follow / Unfollow - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-follow-unfollow.html',
    content: gen.readMD('scuttlebot/howto-follow-unfollow.md')
  })
}