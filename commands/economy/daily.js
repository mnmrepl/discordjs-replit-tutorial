const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'daily',
  cooldown: 1000 * 60 * 60 * 24,
  description: 'Collect a daily reward',
  run: async (client, message, args, Discord) => {
    const money = Math.floor(Math.random() * 2000) + 1

    const embed = new MessageEmbed()
    .setTitle("Daily Reward!")
    .setDescription(`You have received $${money} today as your daily reward!`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor('GREEN')
    .setFooter('Be sure to come back tomorrow!')

    message.channel.send({ embeds: [embed] })
    client.add(message.author.id, money)
  }
}
