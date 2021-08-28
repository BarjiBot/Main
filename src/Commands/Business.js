const { Message } = require('discord.js');
const { EmbedBusiness } = require('../Messages/Messages');

var n = "business";
module.exports = ({
	name : n,
	async execute(msg = new Message()){
		if(msg.mentions.members.first() && msg.member.permissions.has('ADMINISTRATOR' || 'MANAGE_MESSAGES'))
		{
			EmbedBusiness.setAuthor(`${msg.member.displayName}`, msg.author.avatarURL());
			msg.mentions.members.first().send({embeds: [EmbedBusiness]}).then(mesg => {msg.delete();}); 
			return;
		}
		else
			{msg.author.send({embeds: [EmbedBusiness]}).then(bmsg => {msg.delete();}); return;}

	},
});