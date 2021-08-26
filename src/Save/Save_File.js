const SaveFile = require('./Save_File.json');
const { SAVES, ROLES } = require('../Credentials/Config.json')
const fs = require('fs');
const { Guild } = require('discord.js');


function SETUP(server = new Guild()){

	// SaveFile SetUp
	SaveFile[server.id] = { "Messages": {},"Permissions":{}, "Roles": {}, "Channels":{} };

	fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log('Setting up Save-Files.json');
	});
}
function ROLESSETUP(server){
	// Adding Roles To SaveFile

	server.roles.create({name: ROLES.Image, color:'AQUA', permissions:'ATTACH_FILES'}).finally(r =>
		{SaveFile[server.id][SAVES.Roles.toString()][ROLES.Image] = server.roles.cache.find(role => role.name === ROLES.Image).id}
	).catch(console.error);
	

	server.roles.create({name: ROLES.Link, color:'AQUA', permissions:'EMBED_LINKS'}).finally(r =>{
		SaveFile[server.id][SAVES.Roles.toString()][ROLES.Link] = server.roles.cache.find(role => role.name === ROLES.Link).id;
		fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
			if (err) return console.log(err);
			console.log('Setting up Roles in Save-Files.json');
		});
	}
	).catch(console.error);
	
	
}

function SAVE(server, location, data){
	data = data.split(":");
	SaveFile[server][location][data[0]] = data[1];

	fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log('Saving in Save_Files.json');
	});
	return this;
}

function MESSAGESAVE(server, location, userID, amount = 1){
	
	if(!SaveFile[server][location][userID])SaveFile[server][location][userID] = 1;
	else {
		var data = JSON.stringify(SaveFile[server][location][userID]);
		data = parseInt(data) + parseInt(amount);
		SaveFile[server][location][userID] = JSON.parse(data);
	}

	

	fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log('Saving Messages in Save_Files.json');
	});
	return this;
}



async function EXECUTESAVE(server, location, data){
	await SAVE(server, location, data);
}
async function EXECUTEMESSAGESAVE(server, userID, amount = 1){
	await MESSAGESAVE(server, SAVES.Messages, userID, amount);
}


module.exports = {SETUP, ROLESSETUP, EXECUTESAVE, EXECUTEMESSAGESAVE};