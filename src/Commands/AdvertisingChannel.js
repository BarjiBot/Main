const { Message, MessageEmbed } = require('discord.js');
const { Confirmation, ProfilePic, COLORS } = require('../Credentials/Config.json');

var n = "adchannel";

//#region Embed Confirmation
const EmbedConfirmation = new MessageEmbed()
	.setColor(COLORS.HEXS.RED)
	.setTitle('Confirm Action')
	.setDescription(`do you want to add this channel to the advertising channels list?
	\n(you can change it later on and delete this channel from the list)`)
	.setFooter(`please confirm this action by typing -${n} ${Confirmation}`)
	.setTimestamp();
//#endregion

function messageSent(msg = new Message(), args = []){
	console.log("function started");
	if(!msg.args.includes(Confirmation)){
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