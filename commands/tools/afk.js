const { afk } = require('../../Collection')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'afk',
  description: 'Sets a user into AFK mode',
  run: async (client, message, args, Discord) => {
    const reason = args.join(' ') || 'No reason given'
    const user = message.member
    afk.set(message.author.id, [Date.now(), reason])
    const embed = new MessageEmbed()
    .setTitle(`You have been set to AFK mode.`)
    .setDescription(`For: ${reason}`)
    .setTimestamp()
    .setColor('ff0000')
    .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
    message.channel.send({ embeds: [embed]})
  }
}
