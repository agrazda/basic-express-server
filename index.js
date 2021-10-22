'use strict';

require('dotenv').config()
// Entry point
const server = require('./lib/app.js');


 server.start(3000);