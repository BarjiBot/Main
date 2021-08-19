const { Message } = require("discord.js");
const { ID } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');
const SaveFile = require('../Save/Save_File.json');


module.exports = (async function(msg = new Message()){
	if(msg.member.id != ID){

		
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]){
			Saving.SETUP(msg.guild.id.toString());
		}

		
	}
});	
