const net = require('net'),
config = require('../../config.js'),
s = new net.Socket();
s.on("data", data => {
    var msg = {
        type: 'recieve',
        data: JSON.parse(data.toString()).data
    };
    s.write(JSON.stringify(msg));
});
s.connect(config.entityServerPort, () => {
    var msg = {
        type: 'send',
        data: 'Hello!'
    };
    s.write(JSON.stringify(msg));
});
