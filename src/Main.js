
// Token import
const { Token } = require('./Credentials/Config');
TOKEN = Token;

// Discord JS import
const { Client, Intents } = require('discord.js');
const bot = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MEMBERS
]});


// Command Handler import - Handles command files and executes them at send of message
const CommandHandler = require('./Commands/Handlers/CommandHandler');

// Message Handler import - Handles messages
const MessageHandler = require('./Messages/MessageHandler');


// Bot Startup Message
bot.once('ready', () => {
	console.log(`${bot.user.tag} has been activated succesfully`);
}); 

// Message Detection And Redirect To CommandHandler
bot.on('messageCreate', msg => {
	CommandHandler(msg);
	MessageHandler(msg);
});


bot.login(TOKEN); // Bot Start Up








