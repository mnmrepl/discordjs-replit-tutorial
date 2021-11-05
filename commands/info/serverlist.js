const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'serverlist',
  aliases: ['slist'],
  description: 'Displays a list of servers the bot is in',
  run: async (client, message, args, Discord) => {
    let description = 
    `Total Servers: ${client.guilds.cache.size}\n\n` + client.guilds.cache
    .sort((a, b) => b.memberCount - a.memberCount)
    .map(r => r)
    .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ID: ${r.id}`)
    .slice(0, 10)
    .join('\n')

    const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setColor('000000')
    .setFooter(client.user.username)
    .setDescription(description) // we did it this way because its less confusing

    message.channel.send({ embeds: [embed] })
  }
}
