const { Message } = require("discord.js");
const { ID, SAVES, ROLES } = require('../Credentials/Config.json');
const { EmbedInvitesNotAllowed, EmbedLinksNotAllowed } = require("./Messages");

var iperms = 250, lperms = 250;


function Run(msg = new Message()){
	if(!msg.member) return;
	if(msg.member.id != ID){
		if(msg.content.includes('discord.gg/'||'discordapp.com/invite'||'discord.com/invite')){
			EmbedInvitesNotAllowed.setAuthor(msg.guild.name, msg.guild.iconURL());
			msg.author.send({embeds: [EmbedInvitesNotAllowed]}).then(mesg => {msg.delete()});
			return;
		}
		if(msg.content.includes('https://'||'http://'||'www.')){
			EmbedLinksNotAllowed.setAuthor(msg.guild.name, msg.guild.iconURL());
			EmbedLinksNotAllowed.setDescription(`Unfortunately you cant send messages at ${msg.channel}`)
			msg.author.send({embeds: [EmbedLinksNotAllowed]}).then(mesg => {msg.delete()});
			return;
		}
		
	}
}

module.exports = {Run};	


//&& msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR || Permissions.FLAGS.EMBED_LINKS)