const { Message } = require("discord.js");
const { PREFIX } = require('../../Credentials/Config.json');
const { CFM } = require("./CommandFiles");


module.exports = (async function(msg = new Message()){
	if(msg.content[0] == PREFIX){

		// The message string
		var content = msg.content; 

		// The Command
		cmdInput = msg.content.substring(1, msg.content.indexOf(' ')).toLowerCase();
		
		// Incase The Command Doesn't have any arguments
		if(!content.includes(' ')) cmdInput = msg.content.substring(1).toLowerCase();

		// The Command File (if it exists)
		cmd = CFM.get(cmdInput);
		
		console.log(`\nDetected Prefix + ${cmdInput}`); // Debug

		// Checks if command exists, if not returns
		if(!cmd){
			console.log(`No such command as ${cmdInput}. returning`); // Debug
			return;
		}

		// Arguments
		msg.args = [];
		if(content.includes(' ') && content.includes(' ') + 1 != content.length)
			{msg.args = content.split(' '); msg.args.shift()}
		


		msg.confirm = false; // Confirmation 

		// Sends the message info and the arguments to the file
		cmd.execute(msg);
	}


});	




//`Yes, Test went Poggers ${Date.now() - message.createdTimestamp}`
