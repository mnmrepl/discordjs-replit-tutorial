const db = require('quick.db')

module.exports = {
  name: 'disableswear',
  description: 'Disables the antiswear feature',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    if (await db.has(`swear-${message.guild.id}`) === false) {
      await db.delete(`swear-${message.guild.id}`, true)
      message.reply({ content: 'Antiswear feature is now disabled'})
    } else return message.reply({ content: 'Antiswear feature is already disabled!'})
  }
}
