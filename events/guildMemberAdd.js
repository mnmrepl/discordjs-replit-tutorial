const client = require('../index')
const Schema = require('../models/welcomeChannel')
const { MessageEmbed } = require('discord.js')

client.on('guildMemberAdd', async (member) => {
  Schema.findOne({ Guild: member.guild.id}, async (e, data) => {
    if (!data) return
    const user = member.user
    const embed = new MessageEmbed()
    .setTitle('New member has joined!')
    .setDescription(`${user}, welcome to ${member.guild.name}`)
    .setTimestamp()

    const channel = member.guild.channels.cache.get(data.Channel)
    channel.send({ embeds: [embed] })
    channel.send({ content: `${user}`}) // if you want the user to get pinged when they join
  })
})
