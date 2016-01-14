module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Using Trust in Open Networks - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/using-trust-in-open-networks.html' }) }
      <div id="content">
        ${ gen.readMD('articles/using-trust-in-open-networks.md') }
      </div>
    </body>
  </html>`
}