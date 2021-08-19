const { Message, RoleManager, Role } = require("discord.js");
const { ID } = require('../Credentials/Config.json');
const Saving = require('../Save_File.js');
const SaveFile = require('../Save_File.json');
const fs = require('fs');

module.exports = (async function(msg = new Message()){
	if(msg.member.id != ID){

		
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]){
			Saving.SETUP(msg.guild.id.toString());
		}

		
	}
});	
