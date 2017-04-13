var socket = io();
console.log(socket);

socket.on('connect', function() {
    console.log('socket have connected to server.');

    /**
     * listening to the coming socket from server.
     */
    socket.on('newMessage', function(data) {
        console.log('you get the new message: ', data);
    });

    socket.emit('createNewMessage', {
        from: 'bunfong',
        text: 'bat oun som lanh'
    });

});

socket.on('disconnect', function() {
    console.log('socket have disconnected to server.');
});

