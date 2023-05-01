import Discord from 'discord.js'

export default {
    data: new Discord.SlashCommandBuilder().setName('ping').setDescription('See bot ping.'),

    async execute(client: Discord.Client, interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply(`🏓 ${client.ws.ping}`)
    }
}