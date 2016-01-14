module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Secret Handshake - SSB - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/ssb/secret-handshake.html' }) }
      <div id="content">
        ${ gen.readMD('ssb/secret-handshake.md') }
      </div>
    </body>
  </html>`
}