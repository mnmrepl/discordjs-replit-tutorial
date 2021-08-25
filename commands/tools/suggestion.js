const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'suggestion',
  aliases: ['sug', 'suggest'],
  description: 'Posts a suggestion in suggestions channel',
  run: async (client, message, args, Discord) => {
    let messageArgs = args.join(' ')
    const embed = new MessageEmbed()
    .setColor('ff0000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(messageArgs)

    message.channel.send({embeds: [embed]}).then(
      (msg) => {
        msg.react('✅')
        msg.react('❌')
        message.delete()
      }
    ).catch((err) => {
      throw err;
    })
  }
}
