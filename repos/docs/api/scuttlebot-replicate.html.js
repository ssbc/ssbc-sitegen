module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Replicate Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/scuttlebot-replicate.html',
    content: gen.readMD('api/scuttlebot-replicate.md')
  })
}