const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path')
const Pool = require('pg-pool')


app.get('/', async(req, res) => {
  try {
    const peoples = await pool.query('SELECT * FROM users');
    console.log('✅ Users:', peoples.rows);
    
    console.log(path.resolve(__dirname, '../client/index.html'));
    res.sendFile(path.join(__dirname, "./../client/index.html"));
  } catch (err) {
    console.error('❌ Error querying users:', err);
    res.status(500).send('Internal server error');
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg)=>{
    io.emit('chat message', msg)
    console.log('message: ' + msg)
  })
  socket.on('disconnect', ()=> {
    console.log('user disconnected')
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
