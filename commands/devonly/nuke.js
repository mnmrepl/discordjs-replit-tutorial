module.exports = {
  name: 'nuke',
  description: 'Deletes and recreates a channel',
  BotPerms: ['MANAGE_CHANNELS'],
  run: async (client, message, args, Discord) => {
    if (message.author.id !== 'your user id') return message.reply({ content: 'Only my developer can use this command!'})

    message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parent.id)
      ch.setPosition(message.channel.position)
      message.channel.delete()

      ch.send({ content: 'This channel has been nuked.'})

    })
  }
}
