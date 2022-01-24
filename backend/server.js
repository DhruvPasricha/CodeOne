const io = require('socket.io')(4545, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('get-session', (collabId) => {
    socket.join(collabId)
    socket.on('toggleEditor', (editor) => {
      socket.broadcast.to(collabId).emit('currentEditor', editor)
      socket.on('send-playground', (change) => {
        socket.broadcast.to(collabId).emit('receive-playground', change)
      })
    })
  })
})
