module.exports = {
  name: 'donate',
  description: 'Donate money',
  run: async (client, message, args, Discord) => {
    const user = message.mentions.users.first()
    if (!user) return message.reply({ content: 'Please specify who you are donating money to!'})

    const donation = args[1]
    if (!donation) return message.reply({ content: 'Please specify how much you want to donate'})

    if (isNaN(donation)) return message.reply({ content: 'Make sure the amoutn you are donating is a number!'})

    const cDonation = parseInt(donation)
    if ((await client.bal(message.author.id)) < donation) return message.reply({ content: 'You do not have enough money to donate!'})

    await client.rmv(message.author.id, donation)
    await client.add(user.id, donation)

    message.reply({ content: `You just donated ${donation} to ${user}! How nice!`})
  }
}
