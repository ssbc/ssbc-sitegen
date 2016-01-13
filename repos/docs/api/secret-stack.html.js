module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Secret Stack - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/secret-stack.html' }) }
      <div id="content">
        ${ gen.readMD('api/secret-stack.md') }
      </div>
    </body>
  </html>`
}