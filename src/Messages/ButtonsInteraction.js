const { Message, MessageActionRow, MessageButton } = require("discord.js");
const { EmbedNotUser, EmbedSuccess, EmbedCanceled } = require("./Messages");
const { SAVES, YESNO, ROLES } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');
const Saving = require('../Save/Save_File');


function interact(msg = new Message(), bmsg = new Message()){

	const filter = (i) => 
	{
		if(i.user.id === msg.author.id) return true;
		return i.user.send({ embeds: [EmbedNotUser] });
	};
	
	const collector = msg.channel.createMessageComponentCollector({
		filter,
		max: 1,
	});
	
	collector.on('end', (ButtonInteraction) => {
		if(ButtonInteraction.first().customId == YESNO.DENY){
			EmbedCanceled.setAuthor(msg.author.username, msg.author.avatarURL());
			bmsg.edit({ embeds: [EmbedCanceled], components: [] });
			return; 
		}
		id = ButtonInteraction.first().customId.split(',');
		
		if(id[1] == SAVES.Permissions){
			EmbedSuccess.setAuthor(msg.author.username, msg.author.avatarURL());
			bmsg.edit({ embeds: [EmbedSuccess], components: [] });
			Saving.EXECUTESAVE(msg.guild.id, SAVES.Permissions, id[2]);
		}
		if(id[1] == SAVES.Channels){
			if(id[3] == YESNO.CONFIRM){
				EmbedSuccess.setAuthor(msg.author.username, msg.author.avatarURL());
				bmsg.edit({ embeds: [EmbedSuccess], components: [] });
				Saving.EXECUTESAVE(msg.guild.id, SAVES.Channels, id[2]).then(r =>{
					var linkRole = msg.guild.roles.cache.find(r => r.name === ROLES.Link);
					var channel = msg.guild.channels.cache.find(c => c.id === id[2].split(':')[1]);
					console.log(channel.name);
					channel.permissionOverwrites.create(msg.guild.roles.everyone,{'SEND_MESSAGES': false});
					channel.permissionOverwrites.create(linkRole,{'SEND_MESSAGES': true});
			
				});
			}else{
				Saving.REMOVE(msg.guild.id, SAVES.Channels, id[2]);
				bmsg.edit({ embeds: [EmbedSuccess], components: [] });
			}
		}
	});

}
module.exports = {
	interact,
};