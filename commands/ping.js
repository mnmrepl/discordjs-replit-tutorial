module.exports = {
name: 'ping',
aliases: ['p'],
run: (client, message, args, Discord) => {
message.reply({ content: 'pong' })
