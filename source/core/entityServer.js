const child_process = require('child_process');
module.exports = class entityServer {
    constructor(config, serv) {
        this.entities = new Map();
        this.serv = serv;

        this.updates = setInterval(async () => {
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
                var t = JSON.parse(stdout);
                for(var each in t) {
                    console.log(t.indexOf(each))
                    tanks[t.indexOf(each)]
                }

                this.entities.set('tank', tanks)
            })
            /*tanks.forEach(tank => {
                tank.update();
            })*/

        }, 1000/60)
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
