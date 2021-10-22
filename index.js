'use strict';

require('dotenv').config()
const { db } = require('./models/index.js');
const { start } = require('./server/server.js');
// Entry point
const server = require('./server/server.js');


 server.start(3000);

 db.sync().then(() => {
     start(PORT);
 });