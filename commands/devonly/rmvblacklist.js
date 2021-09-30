const blacklist = require('../../models/userBlacklist')

module.exports = {
  name: 'rmvblacklist',
  run: async (client, message, args, Discord) => {
    if (message.author.id !== '794359225157550140') return message.reply({ content: 'Only my developer can use this command!'})
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.reply({ content: 'Please specify someone to remove the blacklist'})

    blacklist.findOne({
      ID: user.user.id
    }, async (err, data) => {
      if (err) throw err
      if (data) {
        await blacklist.findOneAndDelete({
          ID: user.user.id
        }).catch(err => console.log(err))

        message.channel.send({ content: `${user.user.tag} has een removed from the blacklist.`})
      } else {
        message.reply({ content: `${user.user.tag} is not blacklisted.`})
      }
    })
  }
}
