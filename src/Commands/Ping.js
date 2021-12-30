const { Message } = require('discord.js');

var n = "ping";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		msg.reply(`Yes, Test went Poggers :grin: ${msg.createdTimestamp - Date.now()}ms`);
	},
});