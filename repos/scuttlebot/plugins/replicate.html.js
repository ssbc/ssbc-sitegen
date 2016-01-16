module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Replicate Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/replicate.html',
    content: gen.readMD('plugins/replicate.md')
  })
}