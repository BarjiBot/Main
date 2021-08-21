const { Message, Permissions } = require('discord.js');
const { interact } = require('../Messages/ButtonsInteraction');
const { ButtonConfirmDeny, EmbedNoPerm, EmbedMissingArgs, EmbedNeedConfirmation, EmbedSuccess, EmbedNoNeed} = require('../Messages/Messages');
const { SAVES, YESNO } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');

var n = "addpermrole";



function messageSent(msg = new Message()){
	if(msg.mentions.roles.first() && !Object.values(SaveFile[msg.guildId][SAVES.Roles]).find(val => val === msg.mentions.roles.first().id.toString())){
		EmbedNeedConfirmation
			.setDescription(`${msg.mentions.roles.first()} will be added to the mod commands permitted roles
			\n(you can remove it later on)`)
			.setAuthor(msg.author.username, msg.author.avatarURL());

		ButtonConfirmDeny.components[0].setCustomId
		(`${msg.guild.id},${SAVES.Roles},${msg.mentions.roles.first().name}:${msg.mentions.roles.first().id},${YESNO.CONFIRM}`);

			

		msg.reply({ 
			embeds: [EmbedNeedConfirmation], 
			components: [ButtonConfirmDeny]})
			.then(bmsg => {msg.delete();interact(msg, bmsg);});
			

		return;
	}
	else if(msg.mentions.roles.first()){
		EmbedNoNeed.setDescription(`This Role Has Already Been Added! 
		\n(If you wish to remove it use -removepermrole)`)
		.setAuthor(msg.author.username, msg.author.avatarURL());
		msg.reply({ embeds: [EmbedNoNeed]}).then(mesg => {msg.delete();});
		return;
	} else {
		EmbedMissingArgs.setDescription(`Please mention a role that you want to add to the bot permitted roles list 
		\n (Every role on this list will be allowed to use the all of the bot commands!)`);

		msg.reply({ embeds: [EmbedMissingArgs]}).then(mesg => {msg.delete();});
		return;
	}
	return;
}
	


module.exports = ({
	name : n,
	async execute(msg = new Message()){
		if(msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || msg.member.roles.cache.find(r => Object.values(SaveFile[msg.guildId][SAVES.Roles]).includes(r.id)))
			await messageSent(msg);
		else
			msg.member.send({ embeds: [EmbedNoPerm]}).then(bmsg => {msg.delete();});
		
	},
});