module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Design Challenge: Sybil Attacks - Articles - SSBC',
    section: '/docs',
    path: '/docs/articles/design-challenge-sybil-attack.html',
    content: gen.readMD('articles/design-challenge-sybil-attack.md')
  })
}