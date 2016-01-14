module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Using Reputation in Open Networks - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/using-reputation-in-open-networks.html' }) }
      <div id="content">
        ${ gen.readMD('articles/using-reputation-in-open-networks.md') }
      </div>
    </body>
  </html>`
}