'use strict';
const config = require('./config.js');

class Server {
    constructor() {
        this.config = config;
    }
}

module.exports = {
    Server: Server
};
