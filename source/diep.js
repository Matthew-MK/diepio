const config = require('./config.js');

class Server {
    constructor() {
        this.data = null;
        this.config = config;
        this.run();
    }
    run() {
        if(!this.data) this.data = true;
    }
}

module.exports = {
    Server: Server
};
