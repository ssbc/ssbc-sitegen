module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Pull Stream - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/pull-stream.html',
    content: gen.readMD('api/pull-stream.md')
  })
}