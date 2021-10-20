'use strict';

const express = require('express');
const app = express();








module.exports = {
    app,
    start: app.listen(3000, () => console.log('Server is up')),
  };
  