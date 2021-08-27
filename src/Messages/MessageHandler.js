const { Message } = require("discord.js");
const { ID, SAVES, ROLES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');
const SaveFile = require('../Save/Save_File.json');
const { EmbedInvitesNotAllowed, EmbedLinksNotAllowed } = require("./Messages");

var iperms = 250, lperms = 250;

function RunSaves(user, guildID){

	if(!user.roles.cache.find(r => r.id === SaveFile[guildID][SAVES.Roles][ROLES.Image]) && SaveFile[guildID][SAVES.Messages][user.id] >= iperms)
		user.roles.add(SaveFile[guildID][SAVES.Roles][ROLES.Image]);

	if(!user.roles.cache.find(r => r.id === SaveFile[guildID][SAVES.Roles][ROLES.Link]) && SaveFile[guildID][SAVES.Messages][user.id] >= lperms)
		user.roles.add(SaveFile[guildID][SAVES.Roles][ROLES.Link]);
}
function Run(msg = new Message()){
	if(!msg.member) return;
	if(msg.member.id != ID){
		if(msg.content.includes('discord.gg/'||'discordapp.com/invite'||'discord.com/invite')){
			EmbedInvitesNotAllowed.setAuthor(msg.guild.name, msg.guild.iconURL());
			msg.author.send({embeds: [EmbedInvitesNotAllowed]}).then(mesg => {msg.delete()});
			return;
		}
		if(msg.content.includes('https://'||'http://'||'www.') && !JSON.stringify(SaveFile[msg.guildId][SAVES.Channels]).includes(msg.channelId.toString())){
			EmbedLinksNotAllowed.setAuthor(msg.guild.name, msg.guild.iconURL());
			EmbedLinksNotAllowed.setDescription(`Unfortunately you cant send messages at ${msg.channel},
			\n you can only send links in: <#${Array.from(Object.values(SaveFile[msg.guildId][SAVES.Channels])).join('>, <#')}>`)
			msg.author.send({embeds: [EmbedLinksNotAllowed]}).then(mesg => {msg.delete()});
			return;
		}

		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]) Saving.SETUP(msg.guild);
		else
		{
			if(!SaveFile[msg.guildId][SAVES.Roles][ROLES.Link])Saving.ROLESSETUP(msg.guild);
			Saving.EXECUTEMESSAGESAVE(msg.guildId, msg.author.id);
			RunSaves(msg.member, msg.guild.id);
		}
		
	}
}

module.exports = {Run, RunSaves};	


//&& msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR || Permissions.FLAGS.EMBED_LINKS)