const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'beg',
  description: 'Beg for money',
  cooldown: 1000 * 20 * 1,
  run: async (client, message, args, Discord) => {
    const ppl = ['KEEKZ', 'Erika', 'Santa', 'Your mom', 'Your dad']
    const pplIn = Math.floor(Math.random() * ppl.length)
    const No = ['Stop begging', 'No', 'Lol you wish'] // if they say no
    const NoIn = Math.floor(Math.random() * No.length)
    const Yes = ['Fine', 'Sure', 'Ok'] // if they say yes
    const YesIn = Math.floor(Math.random() * Yes.length)

    function random() {
      const num = Math.floor(Math.random() * 2)
      return num === 1
    } 
    if (random() === true) {
      let amount = Math.floor(Math.random() * Math.floor(100)) // random number from 1 - 100
      const yesE = new MessageEmbed()
      .setTitle(`${ppl[pplIn]} says...`)
      .setDescription(`${Yes[YesIn]} here\'s **${amount}**`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true} ))
      .setColor('GREEN')
      message.channel.send({ embeds: [yesE] })
      client.add(message.author.id, amount)
    } else {
      const noE = new MessageEmbed()
      .setTitle(`${ppl[pplIn]} says...`)
      .setDescription(`${No[NoIn]}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true} ))
      .setColor('RED')
      message.channel.send({ embeds: [noE] })
    }
  }
}
