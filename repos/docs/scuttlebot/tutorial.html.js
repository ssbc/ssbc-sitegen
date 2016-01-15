module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Tutorial - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/scuttlebot/tutorial.html',
    content: gen.readMD('scuttlebot/tutorial.md')
  })
}