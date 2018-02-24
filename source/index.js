const socketServer = require('./core/socketServer.js'),
entityServer = require('./core/entityServer.js');

const log = message => {
    console.log('[Main] '+message)
};

module.exports = class server {
    constructor(config) {
        this.config = config;
        this.ioServer = new socketServer(config);
        this.entityServer = new entityServer(config);
    }

    launch() {
        this.ioServer.init();
        log(`Server listening on port ${this.config.port}!`);
        setTimeout(()=>this.ioServer.broadcastTo('lobby', 'message', 'Hello this is the server!'), 1000)
    }
};

const log2 = message => {
    console.log('[Client] '+message)
};


const ioclient = require('socket.io-client');
const client = ioclient('http://localhost')
client.on('message', data => {
      log2(data)
})
client.emit('message', 'hi')
