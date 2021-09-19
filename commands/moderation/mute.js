const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'mute',
  UserPerms: ['MUTE_MEMBERS'],
  BotPerms: ['MUTE_MEMBERS'],
  description: 'Mutes the mentioned user',
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first() 
    let time = args[1]
    let reason = args.slice(2).join(' ')

    const role = message.guild.roles.cache.find(role => role.name === 'Muted') // finding the muted role, make sure you have one

    if (!role) return message.reply({ content: 'You need to create a muted role first!'})
    if (!member) return message.reply({ content: 'Please specify who you are muting'})

    if (member.id === message.author.id) return message.reply({ content: 'You cannot mute yourself'})
    if (member.id === client.id) return message.reply({ content: 'You cannot mute me'})

    let role2 = message.guild.roles.cache.find(role => role.name === 'Muted') 
    if (member.roles.cache.has(role2)) return message.reply({ content: 'That user is already muted'})

    if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ content: 'You cannot mute this user'})

    await member.roles.add(role2)

    const embed = new MessageEmbed() 
    .setTitle(`Successfully muted ${member.user.username}`)
    .setDescription(`Reason: ${reason}`, `For: ${time}`)
    .setColor('ff0000')
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send({ embeds: [embed]})

    setTimeout(() => {
      member.roles.remove(role2)
    }, ms(time))
  }
}
