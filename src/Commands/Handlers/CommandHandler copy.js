const { Message } = require("discord.js");
const { Prefix } = require('../../Credentials/Config.json');
const { CFM } = require("./CommandFiles");


module.exports = (async function(msg = new Message()){
	//console.log(msg);
	if(msg.content[0] == Prefix){
		rmsg = msg.content.substring(1).toLowerCase();
		cmd = CFM.get(rmsg);
		console.log(`\nDetected Prefix + ${msg.content.substring(1).toLowerCase()}`);
		if(!cmd){
			console.log(`No such command as ${msg.content}. returning`); 
			return;
		}
		console.log(cmd);
		cmd.execute(msg);
	}


});	




//`Yes, Test went Poggers ${Date.now() - message.createdTimestamp}`
