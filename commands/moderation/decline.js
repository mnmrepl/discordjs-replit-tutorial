const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'decline',
  description: 'Declines a suggestion',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    let channel = await db.fetch(`suggestion_${message.guild.id}`)
    if (channel === null) return message.reply({ content: 'There is no set channel for suggestions'})

    if (channel === null) return
    const rgx = /^(?:<@!?)?(\d+)>?$/
    const messageID = args[0]
    const replyQ = args.slice(1).join(' ') || 'No reason given.'

    if (!messageID) return message.reply({ content: 'Please specify the ID of the message.'})

    if (!rgx.test(messageID)) return message.reply({ content: 'Please specify the ID of the message.'}) 

    try {
      const suggestionC = message.guild.channels.cache.get(channel)
      if (!suggestionC) return message.channel.send({ content: 'No suggestion channel was found.'})

      const suggested = await suggestionC.messages.fetch(messageID).catch(error => {
        message.channel.send({ content: 'No message was found.'})
      })

      const data = suggested.embeds[0]

      const replyE = new MessageEmbed()
      .setAuthor(`${data.author.name}`, `${data.author.iconURL}`)
      .setTitle(`Suggestion!`)
      .setDescription(`${data.description}`)
      .setColor("RED")
      .addField(`Declined by ${message.author.tag}`, replyQ)
      .setFooter(`Status: declined`)

      suggested.edit({ embeds: [replyE]})
      suggested.reactions.removeAll()
      message.channel.send({ content: 'Successfully declined the suggestion.'})
      // we can send a message to let the user know their suggestion was accepted or declined.

      const user = await client.users.cache.find((u) => u.tag === data.author.name)

      const embed1 = new MessageEmbed()
      .setDescription(`Your [suggestion](https://discord.com/channels/${message.guild.id}/${channel}/${messageID}) has been declined.`)
      .setColor("RED")
    // the description will be a link to their suggestion
      user.send({ embeds: [embed1]})
    } catch (err) {
      console.log(err)
      return
    }
  }
}
