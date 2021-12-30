const { Message } = require("discord.js");
const { EmbedNotUser, EmbedSuccess, EmbedCanceled } = require("./Messages");
const { SAVES, YESNO, ROLES } = require('../Credentials/Config.json');



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
		
		
	});

}
module.exports = {
	interact,
};