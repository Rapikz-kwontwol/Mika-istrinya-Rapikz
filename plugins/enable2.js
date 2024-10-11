let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'freply':
    case 'fakereply':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.freply = isEnable
      break
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'bye':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.bye = isEnable
      break
    case 'antinsfw':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiNsfw = isEnable
      break
      case 'animeupdate':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.animeupdate = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'clear':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.clear = isEnable
      break
          case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'antifoto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiFoto = isEnable
      break
      case 'antiaudio':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiAudio = isEnable
      break
      case 'antivideo':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVideo = isEnable
      break
      case 'antibot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBot = isEnable
      break
      case 'acc':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.acc = isEnable
      break
      case 'anticall':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      bot.antiCall = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autoai':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoAi = isEnable
      break
      case 'simi2':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simiC = isEnable
      break
      case 'simivoice':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simivoice = isEnable
      break
      case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'joinonly':
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.allakses = isEnable
      break 
      case 'onlyprem':
      if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
      }
      bot.onlyprem = isEnable
      break 
      case 'autojoin':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
     case 'antibadword':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiBadword = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      global.opts['restrict'] = isEnable
      break
    case 'game':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.games = isEnable
      break
    case 'adminonly':
      isAll = true
      if (!isAdmin) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.adminonly = isEnable
      break
    case 'rpg':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.rpgs = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autoread = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      break
      case 'viewstory':
      if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      bot.viewStory= isEnable
      break 
    case 'autobio':
      if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      bot.autoBio = isEnable
      break 
    case 'backup':
      if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      bot.backup = isEnable
      break 
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
     if (!/[01]/.test(command)) return m.reply(`List Option :
     
*For Group:*

- ${chat.acc ? '✓' : '*X*'} acc
- ${chat.viewonce ? '✓' : '*X*'} antiViewOnce
- ${chat.adminonly ? '✓' : '*X*'} adminOnly
- ${chat.antiNsfw ? '✓' : '*X*'} Antinsfw
- ${chat.welcome ? '✓' : '*X*'} welcome
- ${chat.bye ? '✓' : '*X*'} bye
- ${chat.autodelvn ? '✓' : '*X*'} Autodelvn
- ${chat.antiAudio ? '✓' : '*X*'} Antiaudio
- ${chat.antiBadword ? '✓' : '*X*'} AntiBadword
- ${chat.antiBot ? '✓' : '*X*'} Antibot
- ${chat.antiCall ? '✓' : '*X*'} Anticall
- ${chat.antiLink ? '✓' : '*X*'} Antilink
- ${chat.delete ? '✓' : '*X*'} AntiDelete
- ${chat.antiSpam ? '✓' : '*X*'} AntiSpam
- ${chat.antiSticker ? '✓' : '*X*'} AntiSticker
- ${chat.autoReply ? '✓' : '*X*'} AutoReply
- ${chat.antiToxic ? '✓' : '*X*'} AntiToxic
- ${chat.animeupdate ? '✓' : '*X*'} AnimeUpdate

*For Bot:*

- ${bot.autoBio ? '✓' : '*X*'} Autobio
- ${bot.backup ? '✓' : '*X*'} Backup
- ${bot.allakses ? '✓' : '*X*'} Joinonly
- ${bot.onlyprem ? '✓' : '*X*'} onlyprem
- ${global.opts['self'] ? '✓' : '*X*'} Public
- ${chat.simi ? '✓' : '*X*'} Simi
- ${chat.simiC ? '✓' : '*X*'} Simi2
- ${chat.simivoice ? '✓' : '*X*'} Simivoice
- ${chat.autoAi ? '✓' : '*X*'} autoAi
- ${chat.autoJoin ? '✓' : '*X*'} AutoJoin
- ${user.autolevelup ? '✓' : '*X*'} AutoLevelup
- ${chat.bcjoin ? '✓' : '*X*'} BcJoin 
- ${chat.detect ? '✓' : '*X*'} Detect
- ${conn.callWhitelistMode ? '✓' : '*X*'} WhiteListMyContact
- ${global.opts['restrict']  ? '✓' : '*X*'} Restrict 
- ${chat.games ? '✓' : '*X*'} Game 
- ${chat.rpgs ? '✓' : '*X*'} Rpg
- ${global.opts['nyimak']  ? '✓' : '*X*'} Nyimak
- ${global.opts['pconly']  ? '✓' : '*X*'} PcOnly
- ${global.opts['gconly']  ? '✓' : '*X*'} GcOnly 
- ${global.opts['swonly']  ? '✓' : '*X*'} SwOnly
- ${global.opts['freply']  ? '✓' : '*X*'} Freply
- ${bot.clear ? '✓' : '*X*'} Clear
- ${chat.descUpdate ? '✓' : '*X*'} Desc
- ${bot.viewStory ? '✓' : '*X*'} viewStory
- ${chat.getmsg ? '✓' : '*X*'} Getmsg

Example :
.on welcome <To activate>
.off welcome <To Deactivate>

`.trim())
      throw false
  }
 m.reply(` PENGATURAN
 
 *Type :* ${type} 
 *Pengaturan* : ~${isEnable ? '.' : '.'}~ / *${isEnable ? 'Aktif ✓' : 'Non Aktif *X*'}* 
 *Untuk* : ${isAll ? 'Bot Ini' : isUser ? '' : 'Chat Ini'}

`)
}
handler.help = ['enable', 'disable']
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able2|(tru|fals)e|(turn)?o(n2|ff2)|[01])$/i
export default handler