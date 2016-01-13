module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Friends Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-friends.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-friends.md') }
      </div>
    </body>
  </html>`
}