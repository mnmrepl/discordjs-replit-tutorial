const client = require('../index')

const prefix = process.env['prefix']
const { Collection, Discord } = require('discord.js')
const Timeout = new Collection()
const ms = require('ms')


client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return;
  if (!message.content.startsWith('=')) return 
  const [cmd, ...args] = message.content
  .slice(prefix.length)
  .trim()
  .split(" ")
  const Discord = require('discord.js')
  let command = client.commands.get(cmd)

  if (!command) command = client.commands.get(client.aliases.get(cmd))
  if (command) {
    if (!message.member.permissions.has(command.UserPerms || [])) return message.reply({ content: `you need ${command.UserPerms} permission to use this command!`})

    if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.reply({ content: `I need ${command.BotPerms || []} to run this command!`})

    if (command.cooldown) {
      if (Timeout.has(`${command.name}${message.author.id}`)) return message.reply({ content: `You are on a ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {lomg : true})} cooldown.`})
      command.run(client, message, args, Discord) 
      Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
      setTimeout (() => {
        Timeout.delete(`${command.name}${message.author.id}`)
      }, command.cooldown)
    } else command.run(client, message, args, Discord)
  }
})
