module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/api.html',
    content: gen.readMD('api.md')
  })
}