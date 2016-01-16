module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Block Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/block.html',
    content: gen.readMD('plugins/block.md')
  })
}