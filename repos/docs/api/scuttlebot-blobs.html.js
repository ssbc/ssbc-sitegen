module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Blobs Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-blobs.html',
    content: gen.readMD('api/scuttlebot-blobs.md')
  })
}