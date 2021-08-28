const { Message } = require('discord.js');
const { EmbedSuccess } = require('../Messages/Messages');
const { SAVES, ROLES } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');
var n = "mymessages";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		EmbedSuccess.setAuthor(msg.member.displayName, msg.author.avatarURL());
		if(SaveFile[msg.guildId][SAVES.Messages][msg.member.id])
			EmbedSuccess.setTitle(`Messages Counted: ${SaveFile[msg.guildId][SAVES.Messages][msg.member.id]}`);
		else
			EmbedSuccess.setTitle(`You Haven't Sent Any Messages Yet!`);
		var arr = Array.from(msg.member.roles.cache.find(r => r === SaveFile[msg.guildId][SAVES.Roles][ROLES.Link]), msg.member.roles.cache.find(r => r === SaveFile[msg.guildId][SAVES.Roles][ROLES.Image]));
		
		var filtered = arr.filter(function(x) {
			return x !== undefined;
	   	})
		EmbedSuccess.setDescription(`Roles Acquired: ${filtered.join(', ')}`);


	},
});