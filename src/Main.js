
const fs = require('fs');

// Token import
const { Token } = require('./Credentials/Config');
TOKEN = Token;

// Discord JS import
const { Client, Collection, Intents, Interaction } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const CommandHandler = require('./Commands/CommandHandler');

bot.once('ready', () => {
	console.log(`${bot.user.tag} has been activated succesfully`);
}); // START UP MESSAGE AND SETUP

bot.on('messageCreate', msg => {CommandHandler(msg)});




bot.login(TOKEN); // Bot Start Up








