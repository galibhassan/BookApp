const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 300;

server.liten(port, () => {
    console.log('server is running on port: ${port}');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('user is connected');
    
})