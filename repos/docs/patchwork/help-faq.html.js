module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Help / FAQ - Patchwork - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/patchwork/help-faq.html' }) }
      <div id="content">
        ${ gen.readMD('patchwork/help-faq.md') }
      </div>
    </body>
  </html>`
}