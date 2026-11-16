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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGBGQW0RHLALatgqCN3BjHkoosAQBiwItJ/z3CezpmXnYne19q1vkyZOZp76BosQ1miEG9G+gIriFFHVLyioEdDBqkgQR0AMxpBDowLWIJprjuyuvnYK7SrEC4SQdeRP1qlGJjNu44qCDX6dB9AIePVA1hxxHfwBE/WHfEY8Lq94hJdtq82brKh5ZjWyXm1pSLgjNcR8dAnmyeAGPDhFigovUro7ojAjMZ4gtISafo59OfBWRS0jVQHyzW0MNxUshq9nEy1oyfz3J4ttIzpV9uCk/R/9WXdtbbOPcl+bbjUFzlrw60HZ3/DpYtnulPpzqYHkbetfNO/0apwWKpzEqKKbs07oby8N0ZQ6hf0FhU7THcOm+eTkrfbL1sv0JX84DKQpPM7LNPkc8nRPJ2PdzP2BtoKYePVrn3Tk176u9xrL94JpzqyZ1S9Mufye+JB9Zyf6P7uFIms1gOByY+9vdy+/heZjxBguuY/leTSOBE7LdTcOeI9Sfo78c9O0xP5pBxb0L0d7ENLlFNaeYbZ5u22sUWEniCHwSm/Uv+pA25E8s45BYfU02NwLvOe3oqrn2Slxm4SlJrerE74o0SPPKxYEF2W6fZ4rW4oxxE0pcFqv9nSfh+XZt72aXCXMWziVXc9UwXp4dZYhNY6APHj1AUIprSiDFZdGdSVoPwLhdoYgg+lQX2Ga1vOBA3ZxviLcX24wyngv9Rjpxm/78nh1lSmDIxwQtXkAPVKSMUF2j+BXXtCRsgeoapqgG+t9fe6BAN/ruW1dNHPRAgklNN0VT5SWMP0z9uIRRVDYFXbEiMrsFIkDnfx0jSnGR1p2MTQFJdMQtMo+Q1kBPYF6jnw0igmKgU9Kgn0NrlnGnuyyNfHWlGqAHzk8/cAx0IIiioIjagOcVRRfEv+ov1w4WVtWXAlHQA/nz2UBQRY3nJUkeSLLGdy+7i8dPhh1gjCjEeQ10YC6RJ4a2abuKpDjRZGLYqWGmXe2Pjj6S8S79ePI2xSfVns/l10Nom8EUskwi40h1iJJG99dLjfuMsGiXvfwDCNBBfzI30Vvbr7VCw0gqBLzBAuOW/ootHSmLV5N4Lntr4Sr4mbgj6cUQmH2jsodvkS8GVekHqCX7Ox27jk+iUXBZD63rS1ctRi2O0O/FDKcaJqfj+rRzuXxzPSzafTaufetmzc6o2dF7uedScTwfNEy5SbCcBsdZpVjKm7QQh+LG4PuzjDIGFR6ypdvQ6aGprB+Zfc5M/uOvws84dV512wSj5+gXsHPwv717J95FjH/0fsP48Zn8y0COfB+vpmV/ZDLuKAgjI2eTunJnt2BpQU56XdxkMm3Vi1qMK/B4fO2BKoc0KckZ6AAWMSlxDHqAlE2X2WmRlH8oZhqbqeWlq67zHNbU+DUHa3xGNYXnCugDRZNUSdN45fEdeTa9njwHAAA=',
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
  
