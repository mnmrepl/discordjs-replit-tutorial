const db = require('quick.db')

module.exports = {
  name: 'setsuggestions',
  description: 'Set the suggestions channel.',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

    if (!Channel) return message.reply({ content: 'Please specify a channel.'})

    await db.set(`suggestion_${message.guild.id}`, Channel.id)

    message.channel.send({ content: `Successfully set ${Channel} as your suggestions channel.`})
  }
}
