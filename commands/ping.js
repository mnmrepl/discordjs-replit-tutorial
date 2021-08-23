module.exports = {
  name: 'ping',
  run: (client, message, args, Discord) => {
    message.reply({ content: 'pong'})
  }
}
