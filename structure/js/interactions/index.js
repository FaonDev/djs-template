const { readdirSync } = require('fs')
const { client } = require('..')

const Commands = readdirSync(`${__dirname}/commands`).map(command => require(`./commands/${command}`))
const Events = readdirSync(`${__dirname}/events`).map(command => require(`./events/${command}`))

for (const event of Events) client.on(event.name, (...params) => event.execute(...params))

client.on('interactionCreate', interaction => interaction.isChatInputCommand && Commands.find(
    command => command.data.name === interaction.commandName
).execute(client, interaction)).on('ready', () => {
    client.application.commands.set(Commands.map(command => command.data))
})

console.log(`Successfully loaded ${Commands.length} command(s).`)
console.log(`Successfully loaded ${Events.length} event(s).`)