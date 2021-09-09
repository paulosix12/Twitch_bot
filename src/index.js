const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.TWITCH_USER,
        joinInterval: 60000, //timeout de 1 minuto
	},
	channels: [ 'mulacurta','hyugoo','pmantis','clastra']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	if(self) return;

	if(message.toLowerCase() === '!eipaulao') {
		client.say(channel, `@${tags.username}, https://youtu.be/Mo0sylqc0fQ`);
	}

	if(message.toLowerCase().includes('bunda')) {
		client.say(channel, `Alguém ai disse bunda ? ( ͡° ͜ʖ ͡°)`);
	}

    if(message.toLowerCase().includes('terraplana')) {
		client.say(channel, `@${tags.username}, A terra não é plana, e sim em formato de Rosquinha !`);
	}

    if(message.toLowerCase().includes('paulao')) {
		client.say(channel, `TheIlluminati VIVA AO PAULÃONISMO TheIlluminati`);
		return //Esse retorno se faz necessario para não ativar o 1° comando 
	}

	if(message.toLowerCase() === '!code') {
		client.say(channel, `@${tags.username}, https://github.com/paulosix12/Twitch_bot`);
	}
});