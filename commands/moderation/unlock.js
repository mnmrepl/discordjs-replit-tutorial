module.exports = {
  name: 'unlock',
  description: 'Unlocks the channel',
  UserPerms: ['MANAGE_CHANNELS'],
  BotPerms: ['MANAGE_CHANNELS'],
  run: async (client, message, args, Discord) => {
    const channel = message.channel || message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find((u) => u.name === args[0])
    if (!channel) return message.reply({ content: 'I could not find that channel.'})

    let msg = await message.channel.send('Unlocking...')

    try {
      channel.permissionOverwrites.edit(message.guild.roles.cache.find((e) => e.name.toLowerCase().trim() === '@everyone'),
      {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true,
      })
      msg.edit({ content: `${channel.name} has been unlocked.`})
    } catch (e) {
      message.channel.send({ content: 'An error has occured.'})
    }
  }
}
