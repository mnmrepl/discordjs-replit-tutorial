const chalk = require('chalk')
const fs = require('fs')
const { commands } = require('../index')
const { readdirSync } = fs
const client = require('../index')

console.log(chalk.blue.bold('Slash Commands'))
readdirSync('./slashcommands').forEach(async(dir) => {
  const commands = readdirSync(`./slashcommands/${dir}/`).filter( (file) => file.endsWith(".js"))

  commands.map(async cmd => {
    let file = require(`../slashcommands/${dir}/${cmd}`)

    let name = file.name || 'No command with that name.'
    let description = file.description || 'This command has no description.'
    let options = file.options || []

    const data = {
      name,
      description, 
      options
    }

    let option = name == 'No command with that name.' ? 'Not ready' : 'Ready'

    console.log(`Slash command ${name} is ${option}`)

    if (option == 'Ready') {
      setTimeout(async () => {
        client.slashcommands.set(name, {
          ...data,
          run: file.run
        })
        await client.guilds.cache.get('804246065082531860') .commands.create(data)
      }, 2500)
    }
  })
})
