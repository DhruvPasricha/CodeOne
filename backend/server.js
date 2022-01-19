const io = require('socket.io')(4545, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('toggleEditor', (editor) => {
    socket.broadcast.emit('currentEditor', editor)
    socket.on('send-playground', (change) => {
      socket.broadcast.emit('receive-playground', change)
    })
  })
})
