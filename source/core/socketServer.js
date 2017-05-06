module.exports = class socketService {
    constructor(port) {
        var Server = require('socket.io');
        this.port = port;
        this.server = require('http').Server();
        this.server.listen(this.port);
        this.io = Server(this.server);
        this.init();
    }
    init() {
        console.log(this.port);
        console.log("Running");
        this.io.on('connection', (socket) => {
            console.log("A user has connected with the ip "+socket.handshake.headers.host.split(':')[0]);
            socket.emit('test', 'testing - server');
        });
    }
}
