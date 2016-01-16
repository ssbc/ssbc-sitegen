module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Linking - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/ssb/linking.html',
    content: gen.readMD('ssb/linking.md')
  })
}