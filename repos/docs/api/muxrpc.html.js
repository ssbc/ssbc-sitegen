module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'MuxRPC - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/muxrpc.html' }) }
      <div id="content">
        ${ gen.readMD('api/muxrpc.md') }
      </div>
    </body>
  </html>`
}