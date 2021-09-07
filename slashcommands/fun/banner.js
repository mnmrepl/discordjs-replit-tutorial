const { MessageEmbed } = require('discord.js')
const axios = require('axios') // run npm i axios in your shell
const token = process.env['token']

module.exports = {
  name: 'banner',
  description: 'Gets someones banner',
  options: [{
    name: 'member',
    description: 'Mention someone whos banner you would like to see',
    type: 'USER',
    required: false // you can make it say true if you want it to be required that you mention someone
  }],
  run: async (client, interaction, args, Discord) => {
    const { user } = interaction.options.get('member')

    axios.get(`https://discord.com/api/users/${user.id}`, {
      headers: {
        Authorization: `Bot ${token}`, // make sure to include your token at the top of your file
      },
    }).then((res) => {
      const { banner, accent_color} = res.data

      if (banner) {
        const extension = banner.startsWith("a_") ? ".gif" : ".png"
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`

        const embed = new MessageEmbed()
        .setTitle(`${user.tag}'s Banner`)
        .setImage(url)
        .setColor(accent_color || '#ff0000')

        interaction.followUp({ embeds: [embed] })
      } else {
        if (accent_color) {
          const embed2 = new MessageEmbed()
          .setDescription(`${user.tag} does not have a banner, here is their accent color`)
          .setColor(accent_color)

          interaction.followUp({ embeds: [embed2] })
        } else {
          interaction.followUp(`${user.tag} does not have a banner or accent color`)
        }
      }
    })
  }
}
