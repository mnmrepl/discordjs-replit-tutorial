const Schema = require('../../models/reactions')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'rolepanel',
  description: 'Sends the reaction roles panel',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    const channel = message.mentions.channels.first() || message.channel

    Schema.findOne({
      Guild: message.guild.id
    }, async (err, data) => {
      if (!data) return message.reply({ content: 'There are no emojis on the role panel.'})
      const mapped = Object.keys(data.Roles).map((value, index) => {
        const role = message.guild.roles.cache.get(data.Roles[value][0])
        return `${data.Roles[value][1].raw} - ${role}`
      }).join('\n\n')

      const embed = new MessageEmbed()
      .setDescription(mapped)

      channel.send({ embeds: [embed] }).then((msg) => {
        data.Message = msg.id
        data.save()
        const reactions = Object.values(data.Roles).map((val) => val[1].id ?? val[1].raw)
        reactions.map((emoji) => msg.react(emoji))
      })    
      })
  }
}
