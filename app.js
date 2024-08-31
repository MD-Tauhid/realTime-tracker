const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();
const port = 5000;

const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket)=>{
    console.log("connected");
});

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('listening on port:', port);
})