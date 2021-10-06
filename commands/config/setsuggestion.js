const { MessageEmbed } = require('discord.js')

const db = require('quick.db')

module.exports = {
    name: 'setsuggestion',
     UserPerms: ['ADMINISTRATOR'],
     description: 'Set your suggestions channel',
	run: async (client, message, args) => {
        let Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if (!Channel) return message.channel.send(`Please mention a channel.`);
        if (Channel.type === "voice") return message.channel.send(`Please mention a text channel!`);

        await db.set(`suggestion_${message.guild.id}`, Channel.id);

        let Embed = new MessageEmbed()
        .setColor("00FFFF")
        .setDescription(`Successfully set the suggestions channel to <#${Channel.id}>.`)

        message.channel.send({ embeds: [Embed]})
    }
}
