var app = require('express')();
const cors = require('cors');
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});
app.get('/', (req, res) => res.send('hello!'));
io.on('connection', (socket) => {  
   console.log('a user connected'); 

   socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
   });
});
io.on('connect_error', function(){
  console.log('Connection Failed');
})
  http.listen(3000, () => {
  console.log('listening on *:3000');
});