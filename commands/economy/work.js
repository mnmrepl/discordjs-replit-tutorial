module.exports = {
  name: 'work',
  description: 'Work for money',
  cooldown: 1000 * 60 * 30,
  run: async (client, message, args, Discord) => {
    const jobs = ['Butler', 'Maid', 'Driver']
    
    const jobIn = Math.floor(Math.random() * jobs.length)
    const money = Math.floor(Math.random() * 800) + 1

    message.reply({ content: `You just worked as **${jobs[jobIn]}** and got **$${money}!**`})
    client.add(message.author.id, money)
  }
}
