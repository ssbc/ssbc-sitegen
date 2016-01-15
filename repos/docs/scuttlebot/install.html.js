module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Install - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/install.html',
    content: gen.readMD('scuttlebot/install.md')
  })
}