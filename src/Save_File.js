const SaveFile = require('./Save_File.json');

const fs = require('fs');

function SETUP(server){
	SaveFile[server] = { "Messages": {}, "Roles": {}, "Channels":{} };

	fs.writeFile('src/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log(JSON.stringify(SaveFile));
		console.log('Setting up Save-Files.json');
	});
}

function SAVE(server, location, data){
	

	console.log("stringfy: " + JSON.stringify(data));
	SaveFile[server][location] += data;

	fs.writeFile('src/Save_File.json', JSON.stringify(SaveFile), function writeJSON(err) {
		if (err) return console.log(err);
		console.log(JSON.stringify(SaveFile));
		console.log('Saving in Save_Files.json');
	});
}

module.exports = {SETUP, SAVE};