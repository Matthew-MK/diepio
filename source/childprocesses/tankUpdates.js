const net = require('net'),
config = require('../../config.js'),
s = new net.Socket();

s.on("data", data => {
    var msg = {
        type: 'recieve',
        call: 'return',
        data: JSON.parse(data.toString()).data
    };
    //s.write(JSON.stringify(msg));
});

s.connect(config.entityServerPort, () => {
    var msg = {
        type: 'send',
        call: 'message',
        data: 'test'
    };
    s.write(JSON.stringify(msg));
});
