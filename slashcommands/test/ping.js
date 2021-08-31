module.exports = {
  name: 'ping',
  description: 'Displays the bots ping',
  run: async (client, interaction, options) => {
    await interaction.followUp({ content: 'pong!'})
  }
}
