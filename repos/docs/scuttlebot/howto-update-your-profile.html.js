module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Update Your Profile - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-update-your-profile.html',
    content: gen.readMD('scuttlebot/howto-update-your-profile.md')
  })
}