const { Util } = require('discord.js')
const Schema = require('../../models/reactions')

module.exports = {
  name: 'addre',
  UserPerms: ['ADMINISTRATOR'],
  description: 'Adds emojis to reaction role panel',
  run: async (client, message, args, Discord) => {
    const role = message.mentions.roles.first()

    let [, emoji] = args
    if (!emoji) return message.reply({ content: 'Please specify an emoji'})

    const parsedEmoji = Util.parseEmoji(emoji)
    Schema.findOne({
      Guild: message.guild.id
    }, async (err, data) => {
      if (data) {
        data.Roles[parsedEmoji.name] = [
          role.id,
          {
            id: parsedEmoji.id,
            raw: emoji
          }
        ]
        await Schema.findOneAndUpdate({
          Guild: message.guild.id
        }, data)
      } else {
        new Schema({
          Guild: message.guild.id,
          Message: 0,
          Roles: {
            [parsedEmoji.name]: [
              role.id,
              {
                id: parsedEmoji.id,
                raw: emoji,
              }
            ]
          }
        }).save()
      }
      message.channel.send({ content: 'New role added to reaction roles panel!'})
    })
  }
}
