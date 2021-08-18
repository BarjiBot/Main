
// Token import
const { Token } = require('./Credentials/Config');
TOKEN = Token;

// Discord JS import
const { Client, Intents} = require('discord.js');
const intentsList = [
	Intents.FLAGS.GUILDS, 
	Intents.FLAGS.GUILD_MEMBERS, 
	Intents.FLAGS.GUILD_BANS, 
	Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
	/* If you see this it means you didn't close off this list, you can do that by clicking the arrow beside the const */
];
const bot = new Client({ intents: intentsList });


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








