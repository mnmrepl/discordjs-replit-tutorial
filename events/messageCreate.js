const client = require('../index')

const prefix = process.env['prefix']


client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return;

  const [cmd, ...args] = message.content
  .slice(prefix.length)
  .trim()
  .split(" ")
  const Discord = require('discord.js')
  let command = client.commands.get(cmd)

  if (!command) command = client.commands.get(client.aliases.get(cmd))
  if (command) {
    if (!message.member.permissions.has(command.UserPerms || [])) return message.reply({ content: `you need ${command.UserPerms} permission to use this command!`})

    if (!message.member.permissions.has(command.BotPerms || [])) return message.reply({ content: `I need ${command.BotPerms || []} to run this command!`})

    await command.run(client, message, args, Discord)
  }
})
