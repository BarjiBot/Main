// Token import
const Token = require('./Token');
TOKEN = Token.GetToken();

// Discord JS import
const { Client } = require('discord.js');
const bot = new Client({ intents: ['DIRECT_MESSAGES'] });

bot.login(TOKEN);



