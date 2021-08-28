const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { PREFIX, COLORS, YESNO, Email, TwitterURL, TwitterID } = require('../Credentials/Config.json');


//#region Help
const EmbedHelp = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.BLUE)
		.setTitle('BotG Commands')
		.setDescription(`Current commands prefix: ${PREFIX}
						\nping :: Will send you the bot's ping
						\nbusiness :: Will send you Barji's business related contacts
						\nmymessages :: Will show you the amount of messages the bot counted
						\nHave a good day 😄`)
		.setTimestamp();
//#endregion

//#region Help
const EmbedModHelp = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.YELLOW)
		.setTitle('BotG Mod Commands')
		.setDescription(`business [@member] :: sends the @member barji business details
						\nadchannel :: adds/removes the channel the command was used on to the adchannels list
						\naddpermrole [@role] :: adds the role to the permitted roles list (ADMIN ONLY)
						\naddmessages [@member] [amount] :: adds amount of messages to member (ADMIN ONLY)`)
		.setTimestamp();
//#endregion

//#region Business
const EmbedBusiness = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.BLUE)
		.setTitle('Barji Business')
		.setDescription(`If you would like to contact Barji with business related inquiries you can use these:`)
		.addField(`\nEmail: ${Email}`, `-`)
		.addField(`\nTwitter: ${TwitterID}`, `or click here: [Click Here](${TwitterURL})`)
		.setTimestamp();
//#endregion

//#region 
const EmbedInvitesNotAllowed = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.DARKRED)
		.setTitle('Discord Invites Are Not Allowed!')
		.setDescription('Sorry But Discord Invites Are Disabled')
		.setTimestamp();
//#endregion

//#region 
const EmbedLinksNotAllowed = 
	new MessageEmbed()
		.setColor(COLORS.HEXS.DARKRED)
		.setTitle('Links Are Not Allowed In This Channel!')
		.setTimestamp();
//#endregion

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
	EmbedInvitesNotAllowed,
	EmbedLinksNotAllowed,
	EmbedBusiness,
	EmbedHelp,
	EmbedModHelp,
};
