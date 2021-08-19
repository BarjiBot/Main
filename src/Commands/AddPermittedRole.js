const { Message } = require('discord.js');
const { interact } = require('../ButtonsInteraction');
const { ButtonDeny, ButtonNeedConfirmation, EmbedNoPerm, EmbedMissingArgs, EmbedNeedConfirmation, EmbedSuccess} = require('../Messages/Messages');
const { SAVES, YESNO } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');

var n = "addpermrole";



function messageSent(msg = new Message()){
	if(!msg.confirm){
		if(msg.mentions.roles.first()){
			EmbedNeedConfirmation.setDescription(`This role will be added to the mod commands permitted roles
			\n(you can remove it later on)`);

			ButtonNeedConfirmation.components[0].setCustomId
			(`${msg.guild.id},${SAVES.Roles},${msg.mentions.roles.first().name}:${msg.mentions.roles.first().id},${YESNO.CONFIRM}`);

			ButtonDeny.components[0].setCustomId(`${YESNO.DENY}`);

			msg.reply({ 
				embeds: [EmbedNeedConfirmation], 
				components: [ButtonNeedConfirmation, ButtonDeny]})
				.then(bmsg => {msg.delete();interact(msg, bmsg);});
			

			return;
		}
		else{
			EmbedMissingArgs.setDescription(`Please mention a role that you want to add to the bot permitted roles list 
			\n (Every role on this list will be allowed to use the all of the bot commands!)`)

			msg.reply({ embeds: [EmbedMissingArgs]}).then(mesg => {msg.delete();});
			return;
		}
	}
	
}

module.exports = ({
	name : n,
	async execute(msg = new Message()){
		if(msg.member.roles.cache.find(r => Object.values(SaveFile[msg.guildId][SAVES.Roles]).includes(r.id)))
			await messageSent(msg);
		else
			msg.member.send({ embeds: [EmbedNoPerm]}).then(bmsg => {msg.delete();});
		
	},
});