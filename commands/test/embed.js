const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'embed',
  description: 'Creates an embed',
  run: async (client, message, args, Discord) => {
    const embed = new MessageEmbed()
    .setTitle('This is an embed')
    .setAuthor('Author:','your image link here') // you can make this have a photo
    .setDescription('This is the embed description')
    .addFields({
      name: 'Field 1', value: 'hey there'
    },
    {
      name: '\u200b', value: '\u200b' // this will space out the embed
    },
    {
      name: 'Field 2', value: 'the embed is now spaced out'
    })
    .setThumbnail('your image link here') // you can make this a photo or you can insert something else (will be shown later)
    .setColor('RED') // can be any hex code or color
    .setFooter('Subscribe!')

    message.channel.send({ embeds: [embed]})
  }
}
