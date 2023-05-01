const { Client } = require('discord.js')

const client = new Client({
    intents: []
})

require('dotenv').config()
client.login(process.env.TOKEN)
exports.client = client
require('./interactions')