'use strict';
module.exports = class template {
    constructor(x, y, rotation, diameter, rgb) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.diameter = diameter;
        this.velocity = [0, 0];
        this.rgb = rgb;
    }
    update() {
        this.r+=0.01;

        this.x += this.velocity[0];
        this.y += this.velocity[1];

        this.velocity[0] -= this.velocity[0] / 10;
        this.velocity[1] -= this.velocity[1] / 10;
    }
}
