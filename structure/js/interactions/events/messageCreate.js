const Discord = require('discord.js')

module.exports = {
    name: Discord.Events.MessageCreate,

    /**
    @param {Discord.Message} message
    */

    async execute(message) {
        // ...
    }
}