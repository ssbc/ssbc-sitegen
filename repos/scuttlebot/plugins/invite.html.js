module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Invite Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/invite.html',
    content: gen.readMD('plugins/invite.md')
  })
}