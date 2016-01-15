module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Use an Invite - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-use-an-invite.html',
    content: gen.readMD('scuttlebot/howto-use-an-invite.md')
  })
}