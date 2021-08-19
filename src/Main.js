
// Token import
const { TOKEN } = require('./Credentials/Config');


// Discord JS import
const { Client, Intents } = require('discord.js');
const bot = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_WEBHOOKS
]});


const SaveFile = require('./Save/Save_File.json');
const Saving = require('./Save/Save_File');

// Command Handler import - Handles command files and executes them at send of message
const CommandHandler = require('./Commands/Handlers/CommandHandler');

// Message Handler import - Handles messages
const MessageHandler = require('./Messages/MessageHandler');



// Bot Startup Message
bot.once('ready', () => {
	console.log(`${bot.user.tag} has been activated succesfully`);

	// Bot's Status
	bot.user.setActivity(`Use ${PREFIX}}help`, {
		type: "STREAMING",
		
		url: "https://www.twitch.tv/barji"
});

});

 

// Message Detection And Redirect To CommandHandler
bot.on('messageCreate', msg => {
	CommandHandler(msg);
	MessageHandler(msg);
});

bot.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	var arr = interaction.customId.split(",");
	Saving.SAVE(arr[0], arr[1], arr[2]);

});


bot.login(TOKEN); // Bot Start Up










