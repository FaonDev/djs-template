const Discord = require('discord.js')

module.exports = {
    name: Discord.Events.ClientReady,

    async execute() {
        console.log('Ready!')
        // ...
    }
}