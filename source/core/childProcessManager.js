const child_process = require('child_process'),
net = require('net'),
log = message => console.log('[ChildProcessManager] '+message);

module.exports = class childProcessManager {
    constructor(config, serv) {
        this.processes = new Map()
        this.config = config;
        this.serv = serv;
    }

    createProcess(name, fileName) {
        if(this.processes.has(name)) return console.log(name+' child process has already been created!')
        this.processes.set(name, child_process.exec('node source/childprocesses/'+fileName, (err, stdout, stderr) => {
            if (err) throw err
            console.log('stdout: '+stdout)
        }));
        log(`Launched ${name} Child Process`);
    }

    endProcess(name) {
        if(!this.processes.has(name)) return console.log(name+' child process does not exist!')
        this.processes.delete(name);
        log(`Ended ${name} Child Process`);
    }

    getProcesses() {
        return this.processes;
    }
}
