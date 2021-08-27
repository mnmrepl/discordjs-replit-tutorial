const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar',
  aliases: ['av'],
  description: 'returns the users avatar',
  run: async (client, message, args, Discord) => {
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!mentionedMember) mentionedMember = message.member

    const embed = new MessageEmbed()
    .setTitle(mentionedMember.user.tag + "'s Avatar")
    .setImage(mentionedMember.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send({ embeds: [embed]})
  }
}
