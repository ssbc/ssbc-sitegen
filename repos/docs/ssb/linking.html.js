module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Content-Hash Linking - Scuttlebot - SSBC',
    section: '/docs',
    path: '/docs/ssb/linking.html',
    content: gen.readMD('ssb/linking.md')
  })
}