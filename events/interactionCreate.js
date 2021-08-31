const client = require('../index')

client.on('interactionCreate', async (interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply({ content: 'I am thinking...', ephemeral: false }).catch(() => {}) // you can make this say whatever you want

    const cmd = client.slashcommands.get(interaction.commandName)
    if (!cmd) return interaction.followUp({ content: 'An error occured!'})

    const args = []

    for (let option of interaction.options.data) {
      if (option.type === 'SUB_COMMAND') {
        if (option.name) args.push(option.name)
        option.options.forEach((x) => {
          if (x.value) args.push(x.value)
        })
      } else if (option.value)
      args.push (option.value)
    }
    interaction.member = interaction.guild.members.cache.get(interaction.user.id)

    cmd.run(client, interaction, args)
  }
})
