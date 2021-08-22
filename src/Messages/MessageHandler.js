const { Message } = require("discord.js");
const { ID, SAVES, ROLES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');
const SaveFile = require('../Save/Save_File.json');


module.exports = (async function(msg = new Message()){
	if(msg.author.id != ID){
		
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]){
			Saving.SETUP(msg.guild);
			
		}
		else
		{
			if(!SaveFile[msg.guildId][SAVES.Roles][ROLES.Link])Saving.ROLESSETUP(msg.guild);

			if(SaveFile[msg.guildId][SAVES.Messages][msg.author.id] < 1000 || !SaveFile[msg.guildId][SAVES.Messages][msg.author.id]) 
				Saving.EXECUTEMESSAGESAVE(msg.guildId, msg.author.id);

			if(SaveFile[msg.guildId][SAVES.Messages][msg.author.id] >= 500 && !msg.member.roles.cache.find(SaveFile[msg.guildId][SAVES.Roles][ROLES.Image]))
				msg.member.roles.add(SaveFile[msg.guildId][SAVES.Roles][ROLES.Image]);

			if(SaveFile[msg.guildId][SAVES.Messages][msg.author.id] >= 1000 && !msg.member.roles.cache.find(SaveFile[msg.guildId][SAVES.Roles][ROLES.Link]))
				msg.member.roles.add(SaveFile[msg.guildId][SAVES.Roles][ROLES.Link]);
		}

		
	}
});	
