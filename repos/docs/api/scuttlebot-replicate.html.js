module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Replicate Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-replicate.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-replicate.md') }
      </div>
    </body>
  </html>`
}