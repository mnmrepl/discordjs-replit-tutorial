const client = require('../index')

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return
  if (message.content.includes('red')) {
    if (message.author.id === '794359225157550140' || message.guild.id !== '804246065082531860') return
    message.reply({ content: 'I like blue!'})
  }
  if (message.content.includes('black')) {
    message.reply({ content: 'I like purple'})
  } 
})
