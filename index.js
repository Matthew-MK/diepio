const Server = require('./source/index.js'),
config = require('./config.js');

var server = new Server(config);

server.launch();

/*
var env = process.env,
envDup = {
    data: JSON.stringify({
        x: 'a',
        y: 'b',
        items: []
    })
},
child_process = require('child_process');
child_process.exec('node test.js', {env: envDup}, (err, stdout, stderr) => {
    if (err) throw err
    x = stdout;
})
*/
