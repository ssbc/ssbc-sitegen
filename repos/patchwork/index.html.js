module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Patchwork - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/patchwork' }) }
      <div id="content">
        ${ gen.readMD('README.md') }
      </div>
    </body>
  </html>`
}