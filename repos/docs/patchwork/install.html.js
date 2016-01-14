module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Install - Patchwork - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/patchwork/install.html' }) }
      <div id="content">
        ${ gen.readMD('patchwork/install.md') }
      </div>
    </body>
  </html>`
}