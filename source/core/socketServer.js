module.exports = class socketServer {
    constructor(config, colors) {
        this.config = config;
        this.colors = colors;
        const Server = require('socket.io');
        this.server = require('http').Server();
        this.server.listen(this.config.server.port);
        this.io = Server(this.server);
        this.init();
    }
    init() {
        console.log('Server running on port '+this.config.server.port);
        this.io.on('connection', (socket) => {
            console.log("A user has connected with the ip "+socket.request.connection.remoteAddress.split(":ffff:")[1]);
            socket.emit('test', 'testing - server');
            socket.emit('test', this.config);
            socket.emit('test', this.colors);
        });
    }
}
