module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Desirable Properties for a Secure Channel - Articles - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/articles/desirable-properties-for-a-secure-channel.html' }) }
      <div id="content">
        ${ gen.readMD('articles/desirable-properties-for-a-secure-channel.md') }
      </div>
    </body>
  </html>`
}