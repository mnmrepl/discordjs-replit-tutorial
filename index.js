const { Collection, Client } = require('discord.js')
const client = new Client({ intents: 32767 })
const server = require('./server.js')


const prefix = process.env['prefix']

const token = process.env['token']

client.on('ready', () => {
  console.log('i am online')
})
client.on('messageCreate' async message => {
if (message.content === '+ping') {
message.reply({ content: pong })
}
})

client.login(token)
