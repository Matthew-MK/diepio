const child_process = require('child_process'),
net = require('net');
const log = message => {
    console.log('[entityServer] '+message)
};

module.exports = class entityServer {
    constructor(config, serv) {
        this.entities = new Map();
        this.serv = serv;

        this.updating = false;


        //
        this.server = net.createServer(c => {
            log('server connected');
            c.on('end', () => {
                console.log('server disconnected');
            });
            c.write(JSON.stringify({a: 'b'}));
            c.pipe(c);
        });
        this.server.listen(config.entityServerPort, () => {
            log(`entityServer listening on port ${config.entityServerPort}!`);
        });
        this.server.on('connected', data => {
            console.log(JSON.stringify(data))
        })

        child_process.exec('node source/childprocesses/tankUpdates.js', (err, stdout, stderr) => {
            if (err) throw err
            console.log(stdout)
        });

        //


        /*this.updates = setInterval(() => {
            if(this.updating) return
            if(!this.entities.has('tank')) return
            var tanks = this.entities.get('tank');
            var envDup = {
                data: JSON.stringify({
                    tanks: tanks,
                    config: config
                })
            }
            child_process.exec('node source/childprocesses/tankUpdates.js', {env: envDup}, (err, stdout, stderr) => {
                if (err) throw err
                console.log('hi')
                console.log(stdout)
                console.log('hey')
                if(stdout === 'completed') return this.updating = false
                var t = JSON.parse(stdout);
                tanks[t.ind].x = t.tank.x;
                tanks[t.ind].y = t.tank.y;
                tanks[t.ind].chatting = t.tank.chatting;
                tanks[t.ind].vel = t.tank.vel
                this.entities.set('tank', tanks)
            })
            this.updating = true;

        }, 1000/60)*/
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
