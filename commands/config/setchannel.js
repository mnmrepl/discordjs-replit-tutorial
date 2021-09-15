const Schema = require('../../models/welcomeChannel')

module.exports = {
  name: 'setchannel',
  UserPerms: ['ADMINISTRATOR'],
  description: 'Sets the welcome channel',
  run: async (client, message, args, Discord) => {
    const channel = message.mentions.channels.first()
    if (!channel) return message.reply({ content: 'Please specify a channel!'})

    Schema.findOne({ Guild: message.guild.id}, async (err, data) => {
      if (data) {
        data.Channel = channel.id
        data.save()
      } else {
        new Schema ({ 
          Guild: message.guild.id,
          Channel: channel.id
        }).save()
      }
      message.reply({ content: `${channel} has been set as your welcome channel`})
    })
  }
}
