const { Message } = require('discord.js');

n = "ping";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		await msg.reply(`Yes, Test went Poggers :grin: ${msg.createdTimestamp - Date.now()}ms`);
	},
});