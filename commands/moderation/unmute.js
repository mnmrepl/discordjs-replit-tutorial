module.exports = {
  name: 'unmute',
  UserPerms: ['MUTE_MEMBERS'],
  BotPerms: ['MUTE_MEMBERS'],
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first()
    let target = message.guild.members.cache.get(member.id)
    const role = message.guild.roles.cache.find(role => role.name === 'Muted')

    target.roles.remove(role.id)
    message.reply({ content: `${member.user.username} has been unmuted`})
  }
}
