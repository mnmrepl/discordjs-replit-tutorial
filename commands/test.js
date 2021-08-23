module.exports = {
  name: 'test',
  UserPerm: ['ADMINISTRATOR'],
  run: (client, message, args, Discord) => {
    message.reply({ content: 'hi!' })
  }
}
