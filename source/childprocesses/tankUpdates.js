const net = require('net');
var PORT = 3000;
var s = new net.Socket();

s.on("data", data => {
    var msg = {
        type: 'recieve',
        data: data
    };
    s.write(JSON.stringify(msg+','));
});
s.connect(PORT, () => {
    var msg = {
        type: 'send',
        data: 'Hello!'
    };
    s.write(JSON.stringify(msg));
});
