const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { dbConnect } = require('./models/db');
const { saveMessageToDb } = require('./models/ops');
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
app.use('/chat', require("./Routes/Chat"));
app.use('/campaign', require("./Routes/Campaign"));
const socket_store = {};

app.get('/', (req, res) => {
  res.send('Impact-Connect Server Active');
});

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;
  console.log('Connected: ', userId);
  socket_store[userId] = socket.id;

  socket.on('message', (data)=>{
    console.log('Message: ', data.message);
    socket.to(socket_store[data.to]).emit('message', data);
    saveMessageToDb(data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected: ', userId);
    delete socket_store[userId];
  });
});

server.listen(3000, async() => {
  await dbConnect();
  console.log('Server Active on Port: 3000');
});