const { Message, MessageActionRow, MessageButton } = require("discord.js");
const { EmbedNotUser, EmbedSuccess, EmbedCanceled } = require("./Messages");
const { SAVES, YESNO } = require('../Credentials/Config.json');
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
	});

}
module.exports = {
	interact,
};