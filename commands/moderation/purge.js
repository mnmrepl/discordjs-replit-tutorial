const { Client, Message} = require('discord.js')

module.exports = {
  name: 'purge',
  aliases: ['clear'],
  description: 'deletes messages',
  UserPerms: ['MANAGE_MESSAGES'],
  BotPerms: ['MANAGE_MESSAGES'],
  run: async (client, message, args, Discord) => {
    try {
      let delamount = args[0]
      if (!args[0]) return message.reply({ content: 'please mention an amount of messages to delete'})
      if (isNaN(delamount)) return message.reply({ content: 'that is not a number!'})
      if (parseInt(delamount) > 100) return message.reply({content: 'you cannot delete more than 100 messages at a time!'})
      await message.channel.bulkDelete(parseInt(delamount) + 1, true)

      await message.channel.send({content: `Purged ${delamount} messages!`}).then(m => {
        setTimeout(() => {
          m.delete()
        }, 5000) // message will be deleted after 5 seconds
      })
    } catch (e) {
      message.reply({ content: 'you cannot delete messages older than 14 days!'})
    }
  }
}
