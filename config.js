/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','50931040249'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Lovensky'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUwZKiSBT8l7pijCgIQkRHDI2oKCCKqLgxB4QCCqHAokBxwn/fwO6ensPubO+tKCry5cvM934CXKAKLmEL5J+gJKjxKeyOtC0hkMFrHUWQgB4IfeoDGfCGvsuiVZre91cHrz3JYM6b2cTl71FGF6rUKHvoaiyfn4MX8OiBsj5lKPgDoMMwaDxGRZPeMs7qU5ThA3PYTKR6a7sXa2rU82N/uGvPe+0FPDpEHxGEY61MYA6Jny1ha/uIfI0+o07tg4f3V+1GY19KiDW9WI1gvzYz65VnRHOMkcUH6jbzvkZ/Es9azDJONEju9o4WRTPEc3gqDztdw5Yy86eXkxTZm83Be6NfoRjDUA8hpoi2X9Z9pUl9IRfSPK4XENfXtX6dzMJEUDUG+ptV4DFFvlyFhjcwv0YcJcgTfWiivrNviwjl5lFtid2MgiR00XE8bzVzqOoa5czfidvkIyvn/6X7ZB6anlPhTGPn6JVx+DQrhAFvnPRkddpAcVXgg3vUxYP+Nfpik99O1sXLJ8fDKpwfUzs0lhuRX01rW1nu7o0Z8OuibFOsf9L3aU3+xHLhLPl8VubiOKV1NaLCMD3ptnCHO4GzHCcI1J2rKKbC+fA4nmuYNlv7mA90PiFwuw4qDkrXMr/0twqZH7xKTPa6EV9fnh2dYauHQB48eoDAGFWU+BQV+HknjnvADxsHBgTSp7ygP5ma9zxjwxnJsmzpnCKysK1BrHJr0qQkjWBfIjV70BfxC+iBkhQBrCoYzlFFC9KasKr8GFZA/utHD2B4o2/GdeW4QQ9EiFTUxXWZFX744erHTz8IihpTp8WB2h0gATL7eQ0pRTiuOh1r7JMgQQ1UE59WQI78rIK/OoQEhkCmpIa/plYtwk74yUjkpgNxCHogfxqCQiCDEStxA5Znh7wkS9+rb9cO1C/LbxhS0APZ89FQkASOE8cjXhwN+aEsfe/uH7/odWghpD7KKiAD1RT5vhSbmgndfsDOZooWK2qsgM92PnLxpvtueUhH9sVSk6MjopMbq8uJV2UOve7PNzM4vy7wWQyUim29l38AATJYT5Y7vBU460g99VYtLoU7HNYSEmLpKGlkbAw0k23cxDDcZucMKMvEVLfcWxaxM84bL8nkbNV3i2P79/WJmZyZzB6o8UtXLYQNCuDvxSzRue1vp5bzzWNoxQknpciN9EI1FqpmeIvt4TV2knF/rpWzdb3pe+PRbo0yYihtfBdMBSZlZLWtfomZa3JDyZ3mBnpP7HNisvdNhZ5Z6ozqPiMEn4OP/c6+/zLujXaXLvbR+w3hfZH8yzC+7pyMZ7ZCui72bs3nA11B8dBYuCSYluZ2vlCc42jFKYZl5uDx+NEDZebTqCB5t93KpMAQ9AAp6i6tOo6KP9RSlVjX4ljt2s78iiqfE7BFOayon5fdnIr8gOdZcfT2yiZFOferBMiAi213cQaPvwEl0W4MTwcAAA==
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
