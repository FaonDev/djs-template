import Discord from 'discord.js'

export default {
    name: Discord.Events.MessageCreate,

    async execute(message: Discord.Message) {
        // ...
    }
}