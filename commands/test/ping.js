const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'Displays the bots ping',
  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
    .setTitle('Pong!')
    .setDescription(`**Ping: **` + client.ws.ping)
    .setColor('ff0000')
    message.channel.send({embeds: [embed]})
  }
}
