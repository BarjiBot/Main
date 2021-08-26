const { Message, Permissions } = require("discord.js");
const { EmbedSuccess, EmbedFailed, EmbedMissingArgs } = require('../Messages/Messages');
const { SAVES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');

var n = "addmessages";

function messageSent(msg = new Message()){
	if(msg.mentions.members.first() && typeof parseInt(msg.args[1]) == 'number' && msg.args.length == 2){
		var user = msg.mentions.members.first();
		Saving.EXECUTEMESSAGESAVE(msg.guildId, user.id, msg.args[1]);
		msg.reply({embeds: [EmbedSuccess]}).then(bmsg => {msg.delete();});
		return;
	}
	else{
		EmbedMissingArgs.setDescription(`missing arguments for command! 
		\n Please make sure the command is written like this:
		\n -addmessages <User Mention> <Amount>`)
		msg.reply({embeds: [EmbedMissingArgs]})
		return;
	}

}


module.exports = ({
	name : n,
	async execute(msg = new Message()){
		if(msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || msg.member.roles.cache.find(r => Object.values(SaveFile[msg.guildId][SAVES.Permissions]).includes(r.id)))
			await messageSent(msg);
		else
			msg.member.send({ embeds: [EmbedNoPerm]}).then(bmsg => {msg.delete();});
		
	},
});