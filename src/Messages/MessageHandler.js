const { Message } = require("discord.js");
const { ID } = require('../Credentials/Config.json');
const SaveFile = require('../Save-File.json');
const fs = require('fs');

module.exports = (async function(msg = new Message()){
	if(msg.member.id != ID){
		console.log(msg.content);
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]){
			SaveFile[msg.guild.id.toString()] = { "Messages": {}, "Roles": {}, "Channels":{} };

			fs.writeFile('src/Save-File.json', JSON.stringify(SaveFile), function writeJSON(err) {
				if (err) return console.log(err);
				console.log(JSON.stringify(SaveFile));
				console.log('Setting up Save-Files.json');
			});
		}

		
	}
});	
