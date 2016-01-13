module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Block Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-block.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-block.md') }
      </div>
    </body>
  </html>`
}