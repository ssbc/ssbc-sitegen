module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secret Stack - Documentation - SSBC',
    section: '/docs',
    path: '/secret-stack',
    content: gen.readMD('README.md')
  })
}