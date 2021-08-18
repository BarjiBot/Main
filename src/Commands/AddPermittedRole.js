const { Message, MessageEmbed } = require('discord.js');
const { Confirmation, ProfilePic  } = require('../Credentials/Config.json');
const fs = require('fs');


var n = "addpermrole";

//#region Embed Confirmation
const EmbedConfirmation = 
	
	new MessageEmbed()
	.setColor('#ff1953')
	.setTitle('Confirm Action')
	.setDescription(`This role will be added to the mod commands permitted roles
	\n(you can remove it later on)`)
	.setFooter(`please confirm this action by typing -${n} ${Confirmation}`)
	.setTimestamp();
//#endregion

function messageSent(msg = new Message(), args = []){
	console.log("function started");
	if(!msg.args.includes(Confirmation) || !msg.args){
		msg.reply({ embeds: [EmbedConfirmation]}).then(mesg => {msg.delete();});
		
		return; 
	}
	
}

module.exports = ({
	name : n,
	async execute(msg = new Message()){
		//if(msg.member.roles.cache.has())
		await messageSent(msg);
	},
});