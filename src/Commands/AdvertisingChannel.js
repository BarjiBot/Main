const { Message } = require('discord.js');
const { EmbedNeedConfirmation } = require('../Messages/Messages');

var n = "adchannel";



function messageSent(msg = new Message(), args = []){
	console.log("function started");
	if(!msg.args.includes(CONFIRM)){
		EmbedNeedConfirmation.setDescription(`This action will add this channel to the advertising channels list
		\n(This can be changed later on))`);
		msg.reply({ embeds: [EmbedNeedConfirmation] }).then(mesg => {msg.delete();});
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