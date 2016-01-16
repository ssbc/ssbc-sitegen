module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Key Concepts - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/ssb/key-concepts.html',
    content: gen.readMD('ssb/key-concepts.md')
  })
}