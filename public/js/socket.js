var socket = io();
console.log(socket);

socket.on('connect', () => {
    console.log('socket have connected to server.');
});

socket.on('disconnect', () => {
    console.log('socket have disconnected to server.');
});