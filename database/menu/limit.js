const limit = (prefix, botName, ownerName) => {
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
◪ *LIMIT*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}bal
  └─ ❏ ${prefix}buylimit
--------------------------------
Note: Kamu bisa membeli limit dengan cara mengumpulkan uang terlebih dahulu. Cek uang kamu dengan cara mengetikan perintah *${prefix}bal* , harga 1 limit = 1000 uang.`
}
exports.limit = limit
