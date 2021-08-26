// Config import
const { TOKEN, PREFIX } = require('./Credentials/Config');


// Discord JS import
const { Client, Intents } = require('discord.js');
const bot = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_WEBHOOKS,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILD_INTEGRATIONS,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MESSAGE_TYPING,
		Intents.FLAGS.GUILD_INVITES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS

]});


const Saving = require('./Save/Save_File');

// Command Handler import - Handles command files and executes them at send of message
const CommandHandler = require('./Commands/Handlers/CommandHandler');

// Message Handler import - Handles messages
const MessageHandler = require('./Messages/MessageHandler');





// Bot Startup Message
bot.once('ready', () => {
	
	console.log(`${bot.user.tag} has been activated succesfully`);


	// Bot's Status
	bot.user.setActivity(`Use ${PREFIX}help`, {
		type: "STREAMING",
		
		url: "https://www.twitch.tv/barji"
	});

});

 

// Message Detection And Redirect To CommandHandler
bot.on('messageCreate', msg => {
	MessageHandler.Run(msg);
	CommandHandler(msg);
});






bot.login(TOKEN); // Bot Start Up











