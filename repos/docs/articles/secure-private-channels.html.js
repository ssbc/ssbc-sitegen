module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Secure, Private Channels: the Good, the Bad, and the Ugly - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/secure-private-channels.html' }) }
      <div id="content">
        ${ gen.readMD('articles/secure-private-channels.md') }
      </div>
    </body>
  </html>`
}