const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'snipe',
  description: "Displays the last deleted message",
  run: async (client, message, args, Discord) => {
    const msg = client.snipes.get(message.channel.id)
    if (!msg) return message.reply({ content: 'There is nothing to snipe!'})
    const embed = new MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if (msg.image) embed
    .setImage(msg.image)
    .setColor('ff0000')
    .setTimestamp()

    message.delete()
    message.channel.send({ embeds: [embed] })
  }
}
