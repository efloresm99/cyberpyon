module.exports = {
	name: 'trainer',
	description: 'Command to become a Pokemon trainer.',
	async execute(message) {

		const serverid = message.guild.id;
		const trainerFunctions = require('./trainers/trainerFunctions.js');
        const isUserATrainer = await trainerFunctions.verifyTrainer(message.author, serverid);

		if (isUserATrainer) {
			message.channel.send(`Hey, ${message.author}! It looks like you are already a Pokemon trainer!`);
		} else {
			const insertTrainer = await trainerFunctions.addTrainer(message.author, serverid);
			if (insertTrainer) {
				message.channel.send(`Congratulations, ${message.author}! You are now a Pokemon trainer!`);
			} else {
				message.channel.send(`Sorry ${message.author}, Something wen wrong :c`);
			}

		}
	},
};
