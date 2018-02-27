const child_process = require('child_process'),
net = require('net');
const log = message => {
    console.log('[entityServer] '+message)
};

module.exports = class entityServer {
    constructor(config, serv) {
        this.entities = new Map();
        this.config = config;
        this.serv = serv;

        this.updating = false;

        this.updates();
    }

    updates() {
        var server = net.createServer(c => { //'connection' listener
            console.log('server connected');
            c.on('end', () => {
                console.log('server disconnected');
            });
            c.on('error', error => {
                console.log(error)
            });
            c.write('hello');
            c.pipe(c);
        });
        server.on('connection', connection => {
            connection.on('data', data => {
                console.log(data.toString())
            });
        });
        server.listen(this.config.entityServerPort, () => { //'listening' listener
            console.log('server bound to port '+this.config.entityServerPort);
            child_process.exec('node source/childprocesses/tankUpdates.js', (err, stdout, stderr) => {
                if (err) throw err
                console.log('stdout: '+stdout)
            });
        });
    }

    addEntity(type, entity) {
        if(!this.entities.has(type)) this.entities.set(type, [])
        let entities = this.entities.get(type);
        entities.push(entity)
        this.entities.set(type, entities)
    }

    removeEntity(type, entity) {
        let entities = this.entities.get(type);
        entities.splice(entities.indexOf(entity));
        if(entities.length === 0) this.entities.delete(type);
        else this.entities.set(type, entities)
    }

    getEntities() {
        return this.entities
    }
};
