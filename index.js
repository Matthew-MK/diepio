const Server = require('./source/index.js'),
config = require('./config.js');

var server = new Server(config);

server.launch();
