const { MessageEmbed } = require('discord.js')
const querystring = require('querystring') // npm i querystring
const fetch = require('node-fetch') // npm i node-fetch

module.exports = {
  name: 'urbandictionary',
  aliases: ['ud'],
  description: 'Get a definition of a word with urban dictionary',
  run: async (client, message, args, Discord) => {
    if (!args.length) return message.reply({ content: 'Please specify a word to look up.'})

    const query = querystring.stringify({ term: args.join(' ')})

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json())

    if (!list.length) return message.channel.send(`No definitions were found for **${args.join(' ')}`)

    const embed = new MessageEmbed()
    .setTitle('Urban Dictionary!')
    .setColor('000000')
    .setDescription(`**Definition:**\n${list[0].definition}`)
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }
}
