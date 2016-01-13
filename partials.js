module.exports.head = function (opts) {
  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="monokai.css">
    <script src="highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>`
}

module.exports.leftnav = function (opts) {
  function item (href, label, subtitle) {
    var isSelected = (href == opts.current)
    return `<div class="leftnav-item ${isSelected ? 'selected' : ''}">
      <a href="${href}" title="${label}">${label}${subtitle?`<br><small>${subtitle}</small>`:''}</a>
    </div>`
  }

  return `<div id="leftnav">
    ${item('/patchwork', 'Patchwork', 'Messaging App')}
    <div class="leftnav-subitems">
      ${item('/docs/patchwork/install.html', 'Install')}
      ${item('/docs/patchwork/help-faq.html', 'Help / FAQ')}
    </div>
    ${item('/scuttlebot', 'Scuttlebot', 'P2P Database')}
    <div class="leftnav-subitems">
      ${item('/docs/sbot/quickstart.html', 'Quickstart')}
      ${item('/docs/sbot/tutorial.html', 'Tutorial')}
      ${item('/docs/sbot/howto-setup-pub.html', 'HOWTO: Setup a Pub')}
    </div>
    ${item('/secure-scuttlebutt', 'Secure Scuttlebutt', 'Database Protocol Lib')}
    <div class="leftnav-subitems">
      ${item('/docs/ssb/learn.html', 'Learn about the Protocol')}
      ${item('/docs/secret-handshake.html', 'Secret Handshake')}
      ${item('/docs/private-box.html', 'End-to-end Encryption')}
    </div>
    ${item('/docs/api/index.html', 'API Documentation')}
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
      ${item('/docs/api/secret-stack.html', 'secret-stack')}
      ${item('/docs/api/muxrpc.html', 'muxrpc')}
      ${item('/docs/api/pull-streams.html', 'pull-streams')}
    </div>
    ${item('/docs/articles/index.html', 'Articles')}
    <div class="leftnav-subitems">
      ${item('/docs/articles/using-reputation-systems-to-create-shared-function-critical-datastructures-in-open-networks.md', 'Design Challenge: Avoiding Centralization and Singletons')}
      ${item('/docs/articles/secure-private-channels.md', 'Design Challenge: Sybil Attacks')}
      ${item('/docs/articles/desirable-properties-for-a-secure-channel.md', 'Desirable Properties for a Secure Channel')}
      ${item('/docs/articles/design-challenge-sybil-attack.md', 'Secure, Private Channels: the Good, the Bad, and the Ugly')}
      ${item('/docs/articles/design-challenge-avoid-centralization-and-singletons.md', 'Using Reputation in Open Networks')}
    </div>
  </div>`
}