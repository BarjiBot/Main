const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { COLORS, YESNO } = require('../Credentials/Config.json');

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
	.setTitle('Missing Values')
	.setDescription('Missing values for command to run')
	.setTimestamp();
//#endregion

//#region Button ConfirmDeny
const ButtonConfirmDeny = 
	new MessageActionRow().addComponents(
		new MessageButton()
			.setCustomId('Confirm,')
			.setEmoji('👍')
			.setLabel('Confirm')
			.setStyle('PRIMARY'),
		new MessageButton()
			.setCustomId(`${YESNO.DENY}`)
			.setEmoji('❌')
			.setLabel('Cancel')
			.setStyle('DANGER')
);
//#endregion



//#region Embed Need Confrimation
const EmbedNeedConfirmation = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.BLUE)
	.setTitle('Confirm Action')
	.setFooter('please confirm this action by clicking the button below')
	.setTimestamp();
//#endregion




//#region Embed Not The Command User
const EmbedNotUser = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.DARKRED)
		.setTitle('NOT USER')
		.setDescription('Only the user who ran the command can click the button')
		.setTimestamp();
//#endregion


//#region Embed No Perm
const EmbedNoPerm = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('No Permissions!')
	.setDescription('You are no allowed to use this command!')
	.setTimestamp();
//#endregion


//#region Canceled
const EmbedCanceled = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.DARKRED)
	.setTitle('Action Was Canceled')
	.setTimestamp();

//#endregion

//#region Canceled
const EmbedNoNeed = 
	new MessageEmbed()
	.setColor(COLORS.HEXS.WHITE)
	.setTitle('This Action Was Preformed Already')
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
	ButtonConfirmDeny,
	EmbedNeedConfirmation,
	EmbedMissingArgs,
	EmbedFailed,
	EmbedSuccess,
	EmbedNotUser,
	EmbedCanceled,
	EmbedNoPerm,
	EmbedNoNeed,
	
};
