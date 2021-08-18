const { Message } = require("discord.js");
const { ID } = require('../Credentials/Config.json')

module.exports = (async function(msg = new Message()){
	if(msg.member.id != ID){
		console.log(msg);
	}
});	
