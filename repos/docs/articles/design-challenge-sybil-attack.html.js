module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Design Challenge: Sybil Attacks - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/design-challenge-sybil-attack.html' }) }
      <div id="content">
        ${ gen.readMD('articles/design-challenge-sybil-attack.md') }
      </div>
    </body>
  </html>`
}