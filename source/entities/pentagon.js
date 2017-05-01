'use strict';
var template = require('./enemyTemplate.js');
module.exports = class pentagon extends template {
    constructor(x, y, rotation, diamater) {
        super(x, y, rotation, diamater, [118,141,252]);
    }
}
