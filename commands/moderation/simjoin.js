const client = require('../../index')

module.exports = {
  name: 'simjoin',
  description: 'Tests guildmemberadd event',
  UserPerms: ['ADMINISTRATOR'],
  run: async (client, message, args, Discord) => {
    client.emit('guildMemberAdd', message.member)
  }
}
