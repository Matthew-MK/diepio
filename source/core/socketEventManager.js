const entities = require('../entities/index.js');
var id = 1;

module.exports = {
    newuser(socket, serv, socketServer, config) {
        console.log('new user '+socket.id)
        socket.user = new entities.tank(id, socket.request.client._peername.address, socket.id);
        serv.entityServer.addEntity('tank', socket.user);
    },
    updateNewUser(serv, socketServer, config) {
      socketServer.server.emit('get players', serv.entityServer.getEntities().get('tank'))
      socketServer.server.sockets.emit('get id', id);
      socketServer.server.sockets.emit('update world', {w: config.w, h: config.h}),
      id++;
    }
}
