const { Message } = require('discord.js');
const {  EmbedHelp, EmbedModHelp } = require('../Messages/Messages');
const { SAVES } = require('../Credentials/Config.json');

var n = "help";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		msg.member.send({embeds: [EmbedHelp, EmbedModHelp]}).then(mesg => {msg.delete();}); return;
	},
});