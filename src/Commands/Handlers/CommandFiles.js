// Collection import - Collection is like a map
const { default: Collection } = require('@discordjs/collection');

// fs import
const fs = require('fs'); 

const CFM = new Collection();

// Command Files List
const CF = fs.readdirSync('src/Commands').filter(file => file.endsWith('.js'));


for (const file of CF) {
	const command = require(`../../Commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	CFM.set(command.name, command);
}
console.log(`succesfully ran CommandFiles, current commands: \n${Array.from(CFM.keys()).join(', ')}`);

module.exports = {
	CFM,
};
		

