const { Message, Permissions } = require('discord.js');
const { interact } = require('../Messages/ButtonsInteraction');
const { ButtonConfirmDeny, EmbedNoPerm, EmbedMissingArgs, EmbedNeedConfirmation, EmbedSuccess, EmbedNoNeed} = require('../Messages/Messages');
const { SAVES, YESNO } = require('../Credentials/Config.json');
const SaveFile = require('../Save/Save_File.json');

var n = "adchannel";

function remove(msg = new Message()){
	EmbedNeedConfirmation
		.setDescription(`${msg.channel} is already in the ad channels list
		\nwill you like to remove it?`)
		.setAuthor(msg.author.username, msg.author.avatarURL());

	ButtonConfirmDeny.components[0].setCustomId
	(`${msg.guild.id},${SAVES.Channels},${msg.channel.name}:${msg.channelId},${YESNO.DENY}`);
	
	

	msg.reply({ 
		embeds: [EmbedNeedConfirmation], 
		components: [ButtonConfirmDeny]})
		.then(bmsg => {msg.delete();interact(msg, bmsg);});
	
}

function messageSent(msg = new Message()){
	if(SaveFile[msg.guildId][SAVES.Channels][msg.channel.name])
	{
		remove(msg);
		return;
	}

	EmbedNeedConfirmation
		.setDescription(`${msg.channel} will be added to the ad channels list
		\n(you can remove it later on)`)
		.setAuthor(msg.author.username, msg.author.avatarURL());

	ButtonConfirmDeny.components[0].setCustomId
	(`${msg.guild.id},${SAVES.Channels},${msg.channel.name}:${msg.channelId},${YESNO.CONFIRM}`);

	

	msg.reply({ 
		embeds: [EmbedNeedConfirmation], 
		components: [ButtonConfirmDeny]})
		.then(bmsg => {msg.delete();interact(msg, bmsg);});
	

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