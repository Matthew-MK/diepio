const socketServer = require('./core/socketServer.js'),
entityServer = require('./core/entityServer.js'),
childProcessManager = require('./core/childProcessManager.js'),
log = message => console.log('[Main] '+message);

module.exports = class server {
    constructor(config) {
        this.config = config;
        this.childProcessManager = new childProcessManager(config, this);
        this.ioServer = new socketServer(config, this);
        this.entityServer = new entityServer(config, this);
    }

    launch() {
        this.ioServer.init();
        log(`Server listening on port ${this.config.port}!`);
        //setTimeout(()=>this.childProcessManager.endProcess('tankUpdates'), 1000)
    }
};
