import { Client } from 'discord.js'
import { config } from 'dotenv'

config()

export const client = new Client({
    intents: []
})

client.login(process.env.TOKEN)
import './interactions'