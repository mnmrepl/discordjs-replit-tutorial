const client = require('../index')
const words = require('../swearwords.json')
const db = require('quick.db')

client.on('messageCreate', async (message) => {
  if (await db.has(`swear-${message.guild.id}`) === false) return
  for (let i = 0; i < words.length; i++) {
    if (message.content.includes(words[i])) {
      const user = message.author
      message.delete()
      message.channel.send({ content: `${user}, that word is not allowed in this server.`})
    }
  }
})
