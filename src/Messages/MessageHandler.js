const { Message } = require("discord.js");


module.exports = (async function(msg = new Message()){
	console.log(msg.content);
});	




//`Yes, Test went Poggers ${Date.now() - message.createdTimestamp}`
