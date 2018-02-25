const io = require('socket.io');
const socketEventManager = require('./socketEventManager.js');
const log = message => {
    console.log('[SocketServer] '+message)
};

module.exports = class socketServer {
    constructor(config, serv) {
        this.config = config;
        this.server = io();
        this.serv = serv;

        this.lobby = [];
    }

    init() {
        this.server.listen(this.config.port)
        this.listen();
    }

    listen() {
        this.server.on('connection', socket => {
            socketEventManager.newuser(socket, this.serv);
            socket.join('lobby', () => {
                this.lobby.push(socket);
                this.broadcastTo('lobby', 'message', 'hello');
            });

            socket.on('disconnect', data => {
                this.lobby.splice(this.lobby.indexOf(socket), 1);
            });

            socket.on('message', data => {
                log(data)
            });
        })
    }

    broadcastTo(room, event, data) {
        this.server.to(room).emit(event, data);
    }
}
