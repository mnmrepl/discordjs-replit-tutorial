module.exports = {
  name: 'createrole',
  aliases: ['crole'],
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    let role = await message.guild.roles.create({
      name: args[0],
      permissions: [],
    })
    message.channel.send({ content: `${role} has been created`})
  }
}
