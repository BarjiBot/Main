const { Message, MessageEmbed, MessageActionRow, MessageButton, Emoji} = require('discord.js');
const { Confirmation, ProfilePic, COLORS  } = require('../Credentials/Config.json');
const fs = require('fs');
//const { MessageButtonStyles } = require('discord.js/typings/enums');



var n = "addpermrole";


//#region Embed Failed
const EmbedFailed = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('FAILED, NO REASON FOUND')
	.setTimestamp();
//#endregion


//#region Embed No Mention
const EmbedNoMention = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.RED)
	.setTitle('No Mention Found')
	.setDescription(`Please mention a role that you want to add to the bot permitted roles list 
					\n (Every role on this list will be allowed to use the all of the bot commands!)`)
	.setTimestamp();
//#endregion

//#region Need Confirmation

//#region Button
const ButtonNeedConfirmation = 
	new MessageActionRow().addComponents(
		new MessageButton()
			.setCustomId('ButtonNeedConfirmation')
			.setEmoji('👍')
			.setLabel('Confirm')
			.setStyle('PRIMARY')
);
//#endregion

//#region Embed 
const EmbedNeedConfirmation = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.BLUE)
	.setTitle('Confirm Action')
	.setDescription(`This role will be added to the mod commands permitted roles
	\n(you can remove it later on)`)
	.setTimestamp();
//#endregion

//#endregion

function messageSent(msg = new Message(), args = []){
	//console.log(MessageButtonStyles.DANGER);
	if(!msg.confirm){
		
		if(msg.mentions.roles.first()){
			EmbedNeedConfirmation.setFooter(`please confirm this action by clicking the button below`);
			ButtonNeedConfirmation.components[0].setCustomId(`${msg.guild.id},Roles,${msg.mentions.roles.first().name}:${msg.mentions.roles.first().id}`);
			msg.reply({ 
				embeds: [EmbedNeedConfirmation], 
				components: [ButtonNeedConfirmation]})
				.then(mesg => {msg.delete();});

			return;
		}
		else{
			msg.reply({ embeds: [EmbedNoMention]}).then(mesg => {msg.delete();});
			return;
		}
	}
	
}

module.exports = ({
	name : n,
	async execute(msg = new Message()){
		//if(msg.member.roles.cache.has())
		await messageSent(msg);
	},
});