const net = require('net')
const HOST = '192.168.7.233'
const PORT = 9876

const messages = []

const update = () => {
  console.clear()
  messages.forEach(m => console.log(m))
}

function handler(socket) {
  console.log(`[${socket.remoteAddress}:${socket.remotePort}] connected`)

  // Receiving data from the client
  socket.on('data', data => {
    messages.push(data.toString())
    update()
  })

  socket.on('close', data => {
    console.log(`connection closed`)
    connection.close()
  })

  socket.on('error', err => {
    console.log(`[${socket.remoteAddress}:${socket.remotePort}] error: ${err}`)
  })
}

// Listen on a TCP port
net.createServer(handler).listen(PORT, HOST)
console.log(`Listening on ${HOST}:${PORT}`)
