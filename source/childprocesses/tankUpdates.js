const net = require('net'),
config = require('../../config.js'),
s = new net.Socket();

s.on("data", data => {
    var d = JSON.parse(data);
    if(d.type === 'send' && d.call === 'kill') {
        s.end();
        s.destroy();
        process.exit(d.data);
    }
    var msg = {
        type: 'recieve',
        call: 'return',
        data: JSON.parse(data.toString())
    };
    s.write(JSON.stringify(msg));
});

s.connect(config.entityServerPort, () => {
    var msg = {
        type: 'send',
        call: 'message',
        data: 'test'
    };
    //setInterval(()=>s.write(JSON.stringify(msg)), 500)
});
