const client = require('../../index')

module.exports = {
  name: 'simleave',
  description: 'Tests guildmemberremove event',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    client.emit('guildMemberRemove', message.member)
  }
}
