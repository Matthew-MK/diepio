const entities = require('../entities/index.js');
var id = 1;
module.exports = {
    'newuser'(socket, serv) {
        console.log('new user '+socket.id)
        serv.entityServer.addEntity('tank', new entities.tank(id, socket.request.client._peername.address, socket.id));
        id++;

    }
}
