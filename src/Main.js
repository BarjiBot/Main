// Token import
const Token = require('./Token');
TOKEN = Token.GetToken();

// Discord JS import
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES] });

bot.login(TOKEN); // Bot Start Up








