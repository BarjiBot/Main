
// Token import
const { Token } = require('./Credentials/Config');
TOKEN = Token;

// Discord JS import
const { Client, Collection, Intents, Interaction } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// Command Handler import - Handles command files and executes them at send of message
const CommandFiles = require('./Commands/Handlers/CommandFiles');
const CommandHandler = require('./Commands/Handlers/CommandHandler');


// Bot Startup Message
bot.once('ready', () => {
	console.log(`${bot.user.tag} has been activated succesfully`);
}); 

// Message Detection And Redirect To CommandHandler
bot.on('messageCreate', msg => CommandHandler(msg));


bot.login(TOKEN); // Bot Start Up








