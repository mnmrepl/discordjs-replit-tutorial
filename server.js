var http = require('http')
http.createServer(function(req, res) {
res.write('connected to uptime robot!')
  res.end()
}).listen(8000)
