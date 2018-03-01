const child_process = require('child_process'),
net = require('net'),
log = message => console.log('[entityServer] '+message)

module.exports = class entityServer {
    constructor(config, serv) {
        this.entities = new Map();
        this.config = config;
        this.serv = serv;

        this.updating = false;

        this.updates();
    }

    updates() {
        this.server = net.createServer(c => { //'connection' listener
            log('server connected');
            c.on('end', () => log('server disconnected'));
            c.on('error', error => log(error));
        });
        this.server.on('connection', connection => {
            var msg = {
                type: 'send',
                data: 'hello'
            };
            connection.write(JSON.stringify(msg));
            connection.on('data', data => {
                log(
                JSON.parse(data.toString()).type === 'send' ?
                'recieved: '+JSON.parse(data.toString()).data :
                'sent: '+JSON.parse(data.toString()).data
                )
            });
        });
        this.server.listen(this.config.entityServerPort, () => { //'listening' listener
            log('server bound to port '+this.config.entityServerPort);
            child_process.exec('node source/childprocesses/tankUpdates.js', (err, stdout, stderr) => {
                if (err) throw err
                log('stdout: '+stdout)
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
