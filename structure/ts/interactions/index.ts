import { readdirSync } from 'fs'
import { client } from '..'

const Commands = readdirSync(`${__dirname}/commands`).map(command => require(`./commands/${command}`))
const Events = readdirSync(`${__dirname}/events`).map(command => require(`./events/${command}`))

for (const event of Events) client.on(event.default.name, (...params) => event.default.execute(...params))

client.on('ready', () => {
    client.application?.commands.set(Commands.map(command => command.default.data))
}).on('interactionCreate', interaction => interaction.isChatInputCommand() && Commands.find(
    command => command.default.data.name === interaction.commandName
).default.execute(client, interaction))

console.log(`Successfully loaded ${Commands.length} command(s).`)
console.log(`Successfully loaded ${Events.length} event(s).`)