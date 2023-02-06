const http = require('http');
const app = require('./app.js');
const { Server } = require("socket.io");
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const cors = {
    origin: '*'
}

const io = new Server(server, {cors});

io.on('connect', (socket) => {
    console.log('Connection is here');

    setTimeout(() => {
        io.emit('NEW_NOTIFOCATION', 'It is your first notificaton');
    }, 10000)

    socket.on('NEW_MESSAGE', (data) => {
        console.log(data);
    })

})


server.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
});