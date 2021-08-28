const { Message } = require('discord.js');
const {  EmbedHelp, EmbedModHelp } = require('../Messages/Messages');
const { SAVES } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');
var n = "help";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		if(msg.member.roles.cache.find(r => Object.values(SaveFile[msg.guildId][SAVES.Roles]).includes(r.id)))
			{msg.member.send({embeds: [EmbedHelp, EmbedModHelp]}).then(mesg => {msg.delete();}); return;}
		else
			{msg.member.send({embeds: [EmbedHelp]}).then(mesg => {msg.delete();}); return;}

	},
});