const Server = require('./source/index.js'),
config = require('./config.js');

var server = new Server(config);

module.exports = server;

server.launch();
