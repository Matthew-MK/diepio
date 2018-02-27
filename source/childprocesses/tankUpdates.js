/*var tanks = JSON.parse(process.env.data).tanks;
var config = JSON.parse(process.env.data).config;

tanks.forEach(tank => {
    var num = tanks.indexOf(tank);
    tank.x += tank.vel[0];
    tank.y += tank.vel[1];
    tank.x++;
    tank.vel[0] /= 1.015;
    tank.vel[1] /= 1.015;
    if (tank.vel[0] > tank.stats.movementSpeed.value) tank.vel[0] = tank.stats.movementSpeed.value
    if (tank.vel[1] > tank.stats.movementSpeed.value) tank.vel[1] = tank.stats.movementSpeed.value
    if (tank.vel[0] < -tank.stats.movementSpeed.value) tank.vel[0] = -tank.stats.movementSpeed.value
    if (tank.vel[1] < -tank.stats.movementSpeed.value) tank.vel[1] = -tank.stats.movementSpeed.value
    if (tank.x > config.w) tank.x = config.w
    if (tank.y > config.h) tank.y = config.h
    if (tank.x < 0) tank.x = 0
    if (tank.y < 0) tank.y = 0
    if (tank.chatting) return
    if (tank.keyMap[38] || tank.keyMap[87]) tank.vel[1] -= 0.025
    if (tank.keyMap[40] || tank.keyMap[83]) tank.vel[1] += 0.025
    if (tank.keyMap[39] || tank.keyMap[68]) tank.vel[0] += 0.025
    if (tank.keyMap[37] || tank.keyMap[65]) tank.vel[0] -= 0.025
    console.log(JSON.stringify({ind: num, tank: tank}))
    if(num === tanks.length-1) console.log('completed')
})
*/

const net = require('net');
const config = require('../../config.js');
var client = net.connect(3000, () => {
    client.emit('connected', 'lol')
    client.write(JSON.stringify({data: 'client connected'}));
});
//client.write(JSON.stringify({data: 'hi'}));
client.on('data', data => {
    console.log(JSON.parse(data.toString()));
    client.end();
});
client.on('end', () => {
    console.log(JSON.stringify({data: 'client disconnected'}));
});
