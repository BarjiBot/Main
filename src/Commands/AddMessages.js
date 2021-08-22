const { Message, Permissions } = require("discord.js");
const { EmbedSuccess } = require('../Messages/MessageHandler');
const { SAVES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');

var n = "addmessages";

function messageSent(msg = new Message()){
	console.log(typeof msg.args[1] == 'number');
	if(msg.mentions.members.first().id && msg.args[1]){
		var user = msg.mentions.members.first();
		Saving.EXECUTEMESSAGESAVE(msg.guildId, user.id, msg.args[1]);
		msg.reply({embeds: [EmbedSuccess]});
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