module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Design Challenge: Avoiding Centralization and Singletons - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/design-challenge-avoid-centralization-and-singletons.html' }) }
      <div id="content">
        ${ gen.readMD('articles/design-challenge-avoid-centralization-and-singletons.md') }
      </div>
    </body>
  </html>`
}