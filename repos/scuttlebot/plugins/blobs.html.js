module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Blobs Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/blobs.html',
    content: gen.readMD('plugins/blobs.md')
  })
}