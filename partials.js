module.exports.page = function (opts) {
  return `<html>
    ${ module.exports.head({ title: opts.title }) }
    <body>
      ${ module.exports.topnav({ current: opts.section }) }
      <div id="layout">
        ${ module.exports.leftnav({ current: opts.path, section: opts.section }) }
        <div id="content">
          ${ opts.content }
        </div>
      </div>
    </body>
  </html>`
}

module.exports.head = function (opts) {
  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="/normalize.css">
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/monokai.css">
    <script src="/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>`
}

module.exports.topnav = function (opts) {
  function item (href, label, subtitle) {
    var isSelected = (href == opts.current)
    return `<a class="topnav-item ${isSelected ? 'selected' : ''}" href="${href}" title="${label}">
      ${label}${subtitle?`<br><small>${subtitle}</small>`:''}
    </a>`
  }

  return `<div id="topnav">
    <div id="topnav-inner">
      ${item('/', 'Home', 'SSBC')}
      ${item('/patchwork', 'Patchwork', 'Social App')}
      ${item('/scuttlebot', 'Scuttlebot', 'P2P Log Store')}
      ${item('/docs', 'Documentation', 'APIs, Articles')}
    </div>
  </div>`
}

module.exports.leftnav = function (opts) {
  function item (href, label, subtitle) {
    var isSelected = (href == opts.current)
    return `<div class="leftnav-item ${isSelected ? 'selected' : ''}">
      <a href="${href}" title="${label}">${label}${subtitle?`<br><small>${subtitle}</small>`:''}</a>
    </div>`
  }

  if (opts.section === '/patchwork') {
    return `<div id="leftnav">
      ${item('/patchwork', 'Patchwork')}
      <div class="leftnav-subitems">
        ${item('/docs/patchwork/install.html', 'Install')}
        ${item('/docs/patchwork/help-faq.html', 'Help / FAQ')}
      </div>
    </div>`
  }
  if (opts.section === '/scuttlebot') {
    return `<div id="leftnav">
      ${item('/scuttlebot', 'Scuttlebot')}
      <div class="leftnav-subitems">
        ${item('/docs/scuttlebot/install.html', 'Install')}
        ${item('/docs/scuttlebot/tutorial.html', 'Tutorial')}
        ${item('/docs/api/scuttlebot.html', 'API / CLI Reference')}
      </div>
      <div class="leftnav-item">Key Concepts</div>
      <div class="leftnav-subitems">
        ${item('/secure-scuttlebutt', 'Secure Scuttlebutt: a global database protocol')}
        ${item('/docs/ssb/linking.html', 'Content-Hash Linking')}
        ${item('/docs/ssb/secret-handshake.html', 'Secret Handshake: a secure channel protocol')}
        ${item('/docs/ssb/end-to-end-encryption.html', 'Private Box: metadata-free encryption')}
        ${item('/docs/ssb/faq.html', 'Frequently Asked Questions')}
      </div>
      <div class="leftnav-item">Howto Guides</div>
      <div class="leftnav-subitems">
        ${item('/docs/scuttlebot/howto-setup-a-pub.html', 'Setup a Pub')}
        ${item('/docs/scuttlebot/howto-create-a-js-client.html', 'Create a JS Client')}
        ${item('/docs/scuttlebot/howto-get-your-id.html', 'Get your ID')}
        ${item('/docs/scuttlebot/howto-get-your-address.html', 'Get your Address')}
        ${item('/docs/scuttlebot/howto-publish-a-post.html', 'Publish a Post')}
        ${item('/docs/scuttlebot/howto-publish-a-file.html', 'Publish a File')}
        ${item('/docs/scuttlebot/howto-publish-encrypted-messages.html', 'Publish Encrypted Messages')}
        ${item('/docs/scuttlebot/howto-follow-unfollow.html', 'Follow/Unfollow')}
        ${item('/docs/scuttlebot/howto-announce-a-pub-server.html', 'Announce a Pub Server')}
        ${item('/docs/scuttlebot/howto-create-an-invite.html', 'Create an Invite')}
        ${item('/docs/scuttlebot/howto-use-an-invite.html', 'Use an Invite')}
        ${item('/docs/scuttlebot/howto-update-your-profile.html', 'Update your Profile')}
      </div>
    </div>`
  }
  if (opts.section === '/docs') {
    return `<div id="leftnav">
      <div class="leftnav-item">API Documentation</div>
      <div class="leftnav-subitems">
        ${item('/docs/api/scuttlebot.html', 'scuttlebot')}
        <div class="leftnav-indent">
          ${item('/docs/api/scuttlebot-blobs.html', 'blobs')}
          ${item('/docs/api/scuttlebot-block.html', 'block')}
          ${item('/docs/api/scuttlebot-friends.html', 'friends')}
          ${item('/docs/api/scuttlebot-gossip.html', 'gossip')}
          ${item('/docs/api/scuttlebot-invite.html', 'invite')}
          ${item('/docs/api/scuttlebot-replicate.html', 'replicate')}
        </div>
        ${item('/docs/api/ssb-msgs.html', 'ssb-msgs')}
        ${item('/docs/api/ssb-msg-schemas.html', 'ssb-msg-schemas')}
        ${item('/docs/api/ssb-ref.html', 'ssb-ref')}
        ${item('/docs/api/ssb-keys.html', 'ssb-keys')}
        ${item('/docs/api/ssb-config.html', 'ssb-config')}
        ${item('/docs/api/secret-stack.html', 'secret-stack')}
        ${item('/docs/api/muxrpc.html', 'muxrpc')}
        ${item('/docs/api/pull-stream.html', 'pull-stream')}
      </div>
      <div class="leftnav-item">Articles</div>
      <div class="leftnav-subitems">
        ${item('/docs/articles/design-challenge-avoid-centralization-and-singletons.html', 'Design Challenge: Avoiding Centralization and Singletons')}
        ${item('/docs/articles/design-challenge-sybil-attack.html', 'Design Challenge: Sybil Attacks')}
        ${item('/docs/articles/using-trust-in-open-networks.html', 'Using Trust in Open Networks')}
      </div>
    </div>`
  }
  return ''
}