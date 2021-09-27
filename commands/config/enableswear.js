const db = require('quick.db')

module.exports = {
  name: 'enableswear',
  description: 'Enables the antiswear feature',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    if (await db.has(`swear-${message.guild.id}`) === false) {
      await db.set(`swear-${message.guild.id}`, true)
      message.reply({ content: 'Antiswear feature is now enabled'})
    } else return message.reply({ content: 'Antiswear feature is already enabled!'})
  }
}
