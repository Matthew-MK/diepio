'use strict';
var template = require('./enemyTemplate.js');
module.exports = class square extends template {
    constructor(x, y, rotation, diamater) {
        super(x, y, rotation, diamater, [255,232,105]);
    }
}
