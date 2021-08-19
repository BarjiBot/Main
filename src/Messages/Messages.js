const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { COLORS } = require('../Credentials/Config.json');

//#region Embed Failed
const EmbedFailed = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('FAILED, NO REASON FOUND')
	.setTimestamp();
//#endregion

//#region Embed No Mention
const EmbedMissingArgs = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.RED)
	.setTitle('No Mention Found')
	.setTimestamp();
//#endregion

//#region Button Confirm
const ButtonNeedConfirmation = 
	new MessageActionRow().addComponents(
		new MessageButton()
			.setCustomId('Confirm,')
			.setEmoji('👍')
			.setLabel('Confirm')
			.setStyle('PRIMARY')
);
//#endregion

//#region Button
const ButtonDeny = 
	new MessageActionRow().addComponents(
		new MessageButton()
			.setCustomId('Deny,')
			.setEmoji('❌')
			.setLabel('Cancel')
			.setStyle('DANGER')
);
//#endregion


//#region Embed 
const EmbedNeedConfirmation = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.BLUE)
	.setTitle('Confirm Action')
	.setFooter('please confirm this action by clicking the button below')
	.setTimestamp();
//#endregion




//#region 
const EmbedNotUser = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('NOT USER')
	.setDescription('Only the user who ran the command can click the button')
	.setTimestamp();
//#endregion

const EmbedNoPerm = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('No Permissions!')
	.setDescription('You are no allowed to use this command!')
	.setTimestamp();

//#region Canceled
const EmbedCanceled = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('CANCELED ACTION')
	.setDescription('ACTION GOT CANCELED!')
	.setTimestamp();

//#endregion



//#region Success
const EmbedSuccess = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.GREEN)
	.setTitle('Success!')
	.setDescription('Action Was Successful!')
	.setTimestamp();

//#endregion

module.exports = {
	ButtonNeedConfirmation,
	ButtonDeny,
	EmbedNeedConfirmation,
	EmbedMissingArgs,
	EmbedFailed,
	EmbedSuccess,
	EmbedNotUser,
	EmbedCanceled,
	EmbedNoPerm,
	
};
