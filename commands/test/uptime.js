module.exports = {
  name: 'uptime',
  aliases: ['ut'],
  description: 'Displays the bots uptime',
  run: async (client, message, args, Discord) => {
    let totalSec = (client.uptime / 1000)
    let days = Math.floor(totalSec / 86400)
    totalSec %= 86400
    let hours = Math.floor(totalSec / 3600)
    totalSec %= 3600
    let minutes = Math.floor(totalSec / 60)
    let seconds = Math.floor(totalSec % 60)
    let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes, **${seconds}** seconds`
    message.reply({ content: uptime })
  }
}
