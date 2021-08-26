const { Message, User } = require("discord.js");
const { ID, SAVES, ROLES } = require('../Credentials/Config.json');
const Saving = require('../Save/Save_File.js');
const SaveFile = require('../Save/Save_File.json');

function RunSaves(user, guildID){

	if(!user.roles.cache.find(r => r.id === SaveFile[guildID][SAVES.Roles][ROLES.Image]) && SaveFile[guildID][SAVES.Messages][user.id] >= 500)
		user.roles.add(SaveFile[guildID][SAVES.Roles][ROLES.Image]);

	if(!user.roles.cache.find(r => r.id === SaveFile[guildID][SAVES.Roles][ROLES.Link]) && SaveFile[guildID][SAVES.Messages][user.id] >= 1000)
		user.roles.add(SaveFile[guildID][SAVES.Roles][ROLES.Link]);
}
function Run(msg = new Message()){
	if(msg.member.id != ID){
		
		// The first message the bot recives will setup the SaveFile of the server
		if(!SaveFile[msg.guild.id.toString()]) Saving.SETUP(msg.guild);
		else
		{
			if(!SaveFile[msg.guildId][SAVES.Roles][ROLES.Link])Saving.ROLESSETUP(msg.guild);
			Saving.EXECUTEMESSAGESAVE(msg.guildId, msg.author.id);
			RunSaves(msg.member, msg.guild.id);

		}
	}
}

module.exports = {Run, RunSaves};	
