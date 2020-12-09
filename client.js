const net = require('net')
const HOST = '192.168.7.233'
const PORT = 9876
const prompt = require('prompt-sync')()

const socket = new net.Socket()

// Connecting to a TCP port
socket.connect(PORT, HOST, () => {
  console.log(`[${HOST}:${PORT}] connected`)

  while (true) {
    const message = prompt('>')
    socket.write(message)
  }
})

// Receiving data from the server
socket.on('data', data => {
  connection.receiveData(data)
})

socket.on('close', () => {
  console.log(`[${HOST}:${PORT}] connection closed`)
})

socket.on('error', err => {
  console.log(`[${socket.remoteAddress}:${socket.remotePort}] error: ${err}`)
})
