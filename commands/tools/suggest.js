const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'suggest',
  aliases: ['sug'],
  description: 'Suggest something',
  run: async (client, message, args, Discord) => {
    let channel = await db.fetch(`suggestion_${message.guild.id}`)
    if (channel === null) return message.reply({ content: 'There is no set channel for suggestions'})

    const suggestionQ = args.join(' ')
    if (!suggestionQ) return message.reply({ content: 'Don\'t forget to suggest something!'})

    const embed = new MessageEmbed()
    .setDescription('Processing.....')

    message.channel.send({ content: `Your suggestion was sent to <#${channel}>.`})

    let msgEmbed = await message.guild.channels.cache.get(channel).send({ embeds: [embed] })
    await msgEmbed.edit({ embeds: [
      new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true} ))
      .setDescription(`${suggestionQ}`)
      .setColor('00ffff')
      .setFooter(`Status: pending`)
      .setTimestamp()
    ]})

    await msgEmbed.react('✅')
    await msgEmbed.react('❌')
  }
}
