const { Message } = require('discord.js')

module.exports = {
  name: 'addrole',
  aliases: ['addr'],
  description: 'Adds the role to the mentioned user',
  run: async (client, message, args, Discord) => {
    if (message.author.id !== 'your user id') return message.reply({ content: 'Only my developer can use this command!'})

    const target = message.mentions.members.first()
    if (!target) return message.reply({ content: 'please mention a user to give the role to'})
    const role = message.mentions.roles.first()
    if (!role) return message.reply({ content: 'please mention the rule you are giving'})

    await target.roles.add(role)
    message.channel.send({ content: `${target.user.username} now has the ${role} role.`})
    message.delete()
  } 
}
