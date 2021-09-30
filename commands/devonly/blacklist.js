const blacklist = require('../../models/userBlacklist')

module.exports = {
  name: 'blacklist', 
  aliases: ['blist'],
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '794359225157550140') return message.reply({ content: 'Only my developer can use this command!'})
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if (!user) return message.reply({ content: 'Please specify someone to blacklist'})

    blacklist.findOne({
      ID: user.user.id
    }, async (err, data) => {
      if (err) throw err
      if (data) {
        message.reply({ content: `${user.user.tag} is already blacklisted!`})
      } else {
        data = new blacklist({ ID: user.user.id })
        data.save().catch(err => console.log(err))

        message.reply({ content: `${user.user.tag} has been succesfully blacklisted`})
      }
    })
  }
}
