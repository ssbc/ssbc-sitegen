module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Using Trust in Open Networks - Articles - SSBC',
    section: '/docs',
    path: '/docs/articles/using-trust-in-open-networks.html',
    content: gen.readMD('articles/using-trust-in-open-networks.md')
  })
}