import Discord from 'discord.js'

export default {
    name: Discord.Events.ClientReady,

    async execute() {
        console.log('Ready!')
        // ...
    }
}