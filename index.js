'use strict';
const config = require('./source/settings/config.js');
const colors = require('./source/settings/colors.js');
const ss = require('./source/core/socketServer.js');
const server = new ss(config, colors);
