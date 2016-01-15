module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Design Challenge: Avoiding Centralization and Singletons - Articles - SSBC',
    section: '/docs',
    path: '/docs/articles/design-challenge-avoid-centralization-and-singletons.html',
    content: gen.readMD('articles/design-challenge-avoid-centralization-and-singletons.md')
  })
}