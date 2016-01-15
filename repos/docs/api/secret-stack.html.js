module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secret Stack - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/secret-stack.html',
    content: gen.readMD('api/secret-stack.md')
  })
}