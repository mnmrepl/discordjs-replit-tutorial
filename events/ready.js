const client = require('../index')

client.on('ready', () => {
  console.log('i am online')

  const channel = client.channels.cache.find(channel => channel.id === '804246065082531863') // channel id of the channel you want the messages to be sent to

  setInterval(() => {
    channel.send('This is for a YouTube video')
  }, 10000) // time in ms
})

