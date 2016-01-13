module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Gossip Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-gossip.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-gossip.md') }
      </div>
    </body>
  </html>`
}