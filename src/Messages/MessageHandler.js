const { Message } = require("discord.js");
const { ID, SAVES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');
const SaveFile = require('../Save/Save_File.json');


module.exports = (async function(msg = new Message()){
	if(msg.author.id != ID){
		console.log("Cache: " + msg.member.roles.cache.toJSON());
		console.log("Save: " + Object.values(SaveFile[msg.guildId][SAVES.Roles]));
		console.log("Save and cache: " + msg.member.roles.cache.find(r => Object.values(SaveFile[msg.guildId][SAVES.Roles]).includes(r.id)));
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]){
			Saving.SETUP(msg.guild.id.toString());
		}

		
	}
});	
