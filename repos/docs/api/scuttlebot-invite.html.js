module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Invite Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-invite.html',
    content: gen.readMD('api/scuttlebot-invite.md')
  })
}