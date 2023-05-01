const Discord = require('discord.js')

module.exports = {
    name: Discord.Events.InteractionCreate,

    /**
    @param {Discord.BaseInteraction} interaction
    */

    async execute(interaction) {
        // ...
    }
}