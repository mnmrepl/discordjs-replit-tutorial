const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ban',
  UserPerms: ['BAN_MEMBERS'],
  BotPerms: ['BAN_MEMBERS'],
  run: async (client, message, args, Discord) => {

      let reason = args.slice(1).join(" ");
        const user = message.mentions.members.first() || message.guild.members.cache.find(a => a.id == args[0]);
    
        if (!reason) reason = 'No reason given.'
        if (!args[0]) return message.reply({content: 'who are you banning? `$ban <@user> reason`'});
    
const embed = new MessageEmbed()
	.setColor('#ff0000')
  .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
	.setTitle(`Successfully banned ${user.user.username}`)
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Reason', value: reason, inline: true },
	)
	.setTimestamp()
	.setFooter('Banned by: ' + message.author.username);

  await user.ban({
    days: 0,
    reason: reason
  }).catch(err => console.log(err)).then(() => message.channel.send({embeds: [embed]}))
  message.delete().catch(err => console.log(err))
  } 
}
