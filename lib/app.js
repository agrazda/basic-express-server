'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');






module.exports = {
    app,
    start: app.listen(3000, () => console.log('Server is up')),
  };
  