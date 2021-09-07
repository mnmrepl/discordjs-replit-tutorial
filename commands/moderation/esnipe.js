const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'esnipe',
  description: 'Displays the last edited message',
  run: async (client, message, args, Discord) => {
    const esnipes = client.esnipes.get(message.channel.id)
    if (!esnipes) return message.reply({ content: 'There is nothing to snipe!'})

    const esnipe = +args[0] - 1 || 0
    const target = esnipes[esnipe]
    if (!target) {
      message.reply(`There are ${snipes.length} to snipe.`)
    }
    const { newc, msg } = target
    message.channel.send({
      embeds: [
        new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
        .addField('Old Message', msg.content)
        .addField('New Content', newc.content)
        .setFooter(`Message sniped ${esnipe + 1} out of ${esnipes.length}`)
      ]
    })
  } 
}
