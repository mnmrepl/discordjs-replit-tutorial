const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'balance',
  aliases: ['bal'],
  description: 'Check a users balance',
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first() || message.author
    const bal = await client.bal(member.id)
    const bankBal = await client.bankBal(member.id)
    
    const embed = new MessageEmbed()
    .setTitle(`${member.tag}'s Balance`)
    .setColor('WHITE')
    .setDescription(`Wallet: **$${parseInt(bal)}** \nBank: **$${parseInt(bankBal)}**`)

    message.channel.send({ embeds: [embed] })
  }
}
