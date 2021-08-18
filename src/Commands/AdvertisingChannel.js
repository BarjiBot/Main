const { Message } = require('discord.js');
const { Confirmation } = require('../Credentials/Config.json');

var n = "adchannel";

function messageSent(msg = new Message(), args = []){
	if(!msg.args.includes(Confirmation)){
		msg.channel.send(`please confirm by typing -${n} ${Confirmation}`);
		return; 
	}
}

module.exports = ({
	name : n,
	async execute(msg = new Message()){
		await messageSent(msg);
	},
});