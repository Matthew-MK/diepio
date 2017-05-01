'use strict';
var template = require('./enemyTemplate.js');
module.exports = class triangle extends template {
    constructor(x, y, rotation, diamater) {
        super(x, y, rotation, diamater, [252,118,119]);
    }
}
