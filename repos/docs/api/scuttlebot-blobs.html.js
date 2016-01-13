module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Blobs Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-blobs.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-blobs.md') }
      </div>
    </body>
  </html>`
}