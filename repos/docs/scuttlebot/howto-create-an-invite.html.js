module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'HOWTO: Create an Invite - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/howto-create-an-invite.html',
    content: gen.readMD('scuttlebot/howto-create-an-invite.md')
  })
}