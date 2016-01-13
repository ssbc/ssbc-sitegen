module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot Invite Plugin - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot-invite.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot-invite.md') }
      </div>
    </body>
  </html>`
}