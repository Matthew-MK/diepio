const config = require('../../config.js'),
    polygon = require('./polygon.js');

module.exports = class triangle extends polygon {
    constructor(x, y, r, d, vel, sdir) {
        super(
        x || ~~(Math.random() * (config.w - 199) + 100), // x
        y || ~~(Math.random() * (config.h - 199) + 100), //y
        r || ~~(Math.random() * 360), // r
        d || 20, // d
        vel || [0, 0], // vel
        30, // hp
        sdir || Math.random(0,1) <= 0.5 ? 0.005 : -0.005); //sdir
    }
}
