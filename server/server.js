const express = require('express');
const socketIO = require('socket.io');

const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3000;

const io = socketIO(server);

io.on('connection', (socket) => {
    // console.log(socket);
    console.log('new user have connected');

    socket.on('disconnect', () => {
        console.log('client have disconnect.');
    });
});


app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});