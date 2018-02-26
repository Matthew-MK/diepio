const socketServer = require('./core/socketServer.js'),
entityServer = require('./core/entityServer.js');

const log = message => {
    console.log('[Main] '+message)
};

module.exports = class server {
    constructor(config) {
        this.r = 0;
        this.config = config;
        this.ioServer = new socketServer(config, this);
        this.entityServer = new entityServer(config, this);

        this.id = 1;
    }

    launch() {
        /*setInterval(()=>{
            if(this.entityServer.getEntities().get('tank')) console.log(this.entityServer.getEntities().get('tank').length)
        }, 1000/60)*/
        this.r++;
        this.ioServer.init();
        log(`Server listening on port ${this.config.port}!`);
        setTimeout(()=>this.ioServer.broadcastTo('lobby', 'message', 'Hello this is the server!'), 1000)
    }
};
/*
const log2 = message => {
    console.log('[Client] '+message)
};


const ioclient = require('socket.io-client');
const client = ioclient('http://localhost')
client.on('message', data => {
      log2(data)
})
client.emit('message', 'hi')*/
