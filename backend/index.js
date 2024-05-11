const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { dbConnect } = require('./db/db');
const { saveMessageToDb } = require('./db/ops');
const cors = require('cors');

const io = new Server(server, {
  cors : {
    origin : '*'
  }
});

dbConnect();

app.use(cors());
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));

const socket_store = {};

app.get('/', (req, res) => {
  res.send('Impact-Connect Server Active');
});

io.on('connection', (socket) => {
  const token = socket.handshake.query.token;
  console.log('Connected: ', token);
  socket_store[token] = socket;

  socket.on('message', (data)=>{
    console.log('Message: ', data.message);
    socket.to(socket_store[data.to]).emit('message', data);
    saveMessageToDb(data);
  });

});

server.listen(3000, async() => {
  await dbConnect();
  console.log('Server Active on Port: 3000');
});