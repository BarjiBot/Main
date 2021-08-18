const { Message } = require('discord.js');

n = "test"

function messageSent(msg = new Message()){
	msg.reply(`This message is inside a seprate function, and it works apparently`);
}

module.exports = ({
	name : "test",
	async execute(msg = new Message()){
		await messageSent(msg);
	},
});