const Discord = require('discord.js')

module.exports = {
    data: new Discord.SlashCommandBuilder().setName('ping').setDescription('See bot ping.'),

    /**
    @param {Discord.Client} client
    @param {Discord.ChatInputCommandInteraction} interaction
    */

    async execute(client, interaction) {
        interaction.reply(`🏓 ${client.ws.ping}`)
    }
}