const socketServer = require('./core/socketServer.js'),
entityServer = require('./core/entityServer.js'),
childProcessManager = require('./core/childProcessManager.js');

const log = message => {
    console.log('[Main] '+message)
};

module.exports = class server {
    constructor(config) {
        this.r = 0;
        this.config = config;
        this.childProcessManager = new childProcessManager(config, this);
        this.ioServer = new socketServer(config, this);
        this.entityServer = new entityServer(config, this);

        this.id = 1;
    }

    launch() {
        this.r++;
        this.ioServer.init();
        log(`Server listening on port ${this.config.port}!`);
        //setTimeout(()=>this.childProcessManager.endProcess('tankUpdates'), 1000)
    }
};
