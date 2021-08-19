const SaveFile = require('./Save_File.json');

const fs = require('fs');
const { loadavg } = require('os');

function SETUP(server){
	SaveFile[server] = { "Messages": {}, "Roles": {}, "Channels":{} };

	fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log(JSON.stringify(SaveFile));
		console.log('Setting up Save-Files.json');
	});
}

function SAVE(server, location, data){
	data = data.split(":");
	SaveFile[server][location][data[0]] = data[1];

	fs.writeFile('src/Save/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log(JSON.stringify(SaveFile));
		console.log('Saving in Save_Files.json');
	});
	return this;
}


async function EXECUTESAVE(server, location, data){
	await SAVE(server, location, data);
}


module.exports = {SETUP, EXECUTESAVE};