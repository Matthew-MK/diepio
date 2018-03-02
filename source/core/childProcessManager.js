module.exports = class childProcessManager {
    constructor(config, serv) {
        this.processes = new Map()

        this.config = config;
        this.serv = serv;
    }
}
