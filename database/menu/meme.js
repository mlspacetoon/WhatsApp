const meme = (prefix, botName, ownerName) => {
	return `
「 *mlspacetoon* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: stardust
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo`
}
exports.meme = meme
