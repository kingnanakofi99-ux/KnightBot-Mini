/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['233273910077','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['blaze', 'oneaboveall'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'BlazeBot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXbOiOBT8L3nVGkAxCFW3ahFQUUHAb7f2IUKEyKchojDlf9/CO3fuPOzO3uUpJKk+ffp05zvIclLiOa6B8h0UlFSI4XbJ6gIDBYxu5zOmoAsCxBBQwNy6Xwf9qDeo3UHNhxPjPsgPSeyTxXG+0LFU3i9pAp3c2x3ewLMLitspIf5vAK3TgKzUTEp2Wa0Op9LqyK7VwRV5mFNo6TOO82xm3FZhar6BZ4uICCVZaBQRTjFFyRzXDiL0a/QnKvSC6O6dk6Y27xcjPIyzvb7sQAijXItL2c94OD3nbrL5Gv1Tnjy2AyM/wqPtn0Y+GTeZNeYbaVoslhJZWAe5YrqwhfHwnX5JwgwHZoAzRlj9Zd2veuPMirFYr9Uopl6QrLXDUoeXcLBiruFspouFcwg3Us77XyOe9ji9cK97zeXJ/nRmQnTYjke57tsrOXhYDIaPsAr3lrW//0rcoR9eif+P7rt5yM3FZQ6douFGcRKJWiUZrh1nx0lUeIG6C/2tt0vYV21zscZowPU4uuB9xkF4rJaUVJZf1pbd0QI4XzvDOYw9N7I+6SN2o79lKXujJjw1e7dTWQdhe1t6Ep7JgoMfDbp3JvDYRGh3PzjS1CFz7pBGNxhHq8LjuXAXDfZYIJcHpKGz24fio3czPFmL7m+vjmJcmwFQhGcXUBySklHESJ699vpCF6CgWmGfYvaSF6SVIeztoLb6aqTzN6s5ufU0k9xkWy0yl6Oy6c/4SzQpL+Ib6IKC5j4uSxxMSclyWlu4LFGIS6D8+VcXZPjB3gfXlmurnQkt2Sa7FUmOgo+pfhwi389vGVvVma+1C0yBwn9uY8ZIFpatjrcMUT8iFdYixEqgnFFS4p8dYooDoDB6wz9Tq+VBK/x6Md7BQX8CuiB9DYQEQAG9fr8n9WWB5yVJ6Q3+KL/dW1hUFN8yzEAXJK9rQm/Yl3leFKEgQplvb7YHz58MW8AAM0SSEihAc1K3fzA0Y5YiKfAnE9UIVS1UwWdHH9Z4l348mZnkMjQWCzg9HQxtb6I6FunYH9pUCv1mei0JV9Pa38Vv/wACFMCvPaOAc1/rzKLh+LqORtyIn/ijXg1FPhLsLKp2195D7M3Lq8rsKUE5kjeVRWWZu/ZdJ1inpldtGs5MO5Y2Ju5Jgqr61lYLcEV8/GsxfdagUaraJAtwpYcwricPV7aFeiQy0xlKuWCLRSUsM5+3zbWmM/XaRzkuQisuH7aeNrNgqXdqo1GNzTAIeB7728sP075Ck/x4rMjLTu2s2t8zwa/sZ6id4H/P7p14azH+2f0F48dr8i+JHHkeWZk5N9LqTtTrjdSknpTFcv7YOzrqiFPrAalZDa/DbFyA5/OvLigSxM45TYECUBbQnASgC2h+az1rZuf8N8U0dWPqbrhqO09QydTPHKxJikuG0gIogiSLw4EoSIMuSGu1KFYMsY/4ALX9LN8Hz78Bn5FVuloHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'BlazeBot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
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
  
