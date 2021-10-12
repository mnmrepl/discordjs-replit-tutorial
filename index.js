const { Collection, Client } = require('discord.js')
const client = new Client({ intents: 32767 })
const server = require('./server.js')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zox:Cminami.12@database.xcmtd.mongodb.net/zox?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}).then(console.log('connected to the database'))
const schema = require('./models/economy')

const prefix = process.env['prefix']

const token = process.env['token']


module.exports = client;

client.commands = new Collection()
client.aliases = new Collection()
client.slashcommands = new Collection()

require('./handler')(client)
require('./handler/slashcommands')


client.bal = (User) => new Promise(async ful => {
  const data = await schema.findOne({ User   })
    if (!data) return ful(0)
    if (!data.Wallet || data.Wallet === null) return ful(0)
    ful(data.Wallet)
})
  client.add = (User, Money) => {
    schema.findOne({
      User
    }, async (err,data) => {
      if (err) throw err
      if (data) {
        data.Wallet += Money
      } else {
        data = new schema ({ User: User, Wallet: Money})
      }
      data.save()
    })
  }
  client.rmv = (User, Money) => {
    schema.findOne({ User }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.Wallet -= Money
      } else {
        data = new schema({ User: User, Wallet: -Money })
      }
      data.save()
    })
  }
  client.bankBal = (User) => new Promise(async ful => {
    const data = await schema.findOne({ User })
    if (!data) return ful(0)
    if (!data.Bank) return ful(0)
    ful(data.Bank)
  })
  client.bankDeposit = (User, Money) => {
    schema.findOne({ User}, async (err, data) => {
      if (err) throw err
      if (data) {
        data.Bank += Money
      } else {
        data = new schema({ User: User, Bank: Money })
      } data.save()
    })
  }
  client.bankWithdraw = (User, Money) => {
    schema.findOne({ User }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.Bank -= Money
      } else {
        data = new schema({ User: User, Bank: -Money})
      }
      data.save()
    })
  }

client.login(token)
