import Discord from 'discord.js'

export default {
    name: Discord.Events.InteractionCreate,

    async execute(interaction: Discord.BaseInteraction) {
        // ...
    }
}