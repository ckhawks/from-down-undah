const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('post')
		.setDescription('Provides information about the user.')
        .addStringOption(option => 
            option.setName('content')
                .setDescription('The message to echo')
                .setRequired(true)), // Makes the option required
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        const timestamp = new Date(interaction.createdTimestamp).toISOString();
		await interaction.reply(`user : ${interaction.user.username} \nuserId : ${interaction.user.id} \nMessage : ${interaction.options.getString('content')} \nTime : ${timestamp}`);
	},
};