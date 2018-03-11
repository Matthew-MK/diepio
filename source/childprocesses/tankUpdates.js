const net = require('net'),
config = require('../../config.js');

const client = net.createConnection({port: config.entityServerPort}, () => {
    console.log('connected to server!');
    var msg = {
        type: 'send',
        call: 'message',
        data: 'Hello!'
    };
    client.write(JSON.stringify(msg));
});

client.on('data', (data) => {
    var d = JSON.parse(data);
    if(d.type === 'send' && d.call === 'kill') return client.destroy()
    var msg = {
        type: 'recieve',
        call: 'return',
        data: JSON.parse(data.toString())
    };
    s.write(JSON.stringify(msg));
});

client.on('end', () => {
    console.log('disconnected from server');
});
