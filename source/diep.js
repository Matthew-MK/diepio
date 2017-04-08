const WebSocket = require('ws');
const config = require('./config.js');

class Server {
    constructor() {
        this.data = null;
        this.run();
    }
    run() {
        if(!this.data) this.data = true;
    }
}

module.exports = {
    Server: Server
};
