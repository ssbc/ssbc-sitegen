module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot Private Plugin - Documentation - SSBC',
    section: '/docs',
    path: '/scuttlebot/plugins/private.html',
    content: gen.readMD('plugins/private.md')
  })
}