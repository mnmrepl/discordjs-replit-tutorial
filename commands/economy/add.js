module.exports = {
  name: 'add',
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first() || message.member

    client.add(member.id, parseInt(args[0]))

    message.reply({ content: `Successfully added $${args[0]}`})
  }
}
