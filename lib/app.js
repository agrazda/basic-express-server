'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
// const person = require('./lib/person.js')

app.use(express.json());
app.use(logger);
// app.use(handleError)




module.exports = {
    server: app,
    start: port => {app.listen(port, () => console.log('Server is up'))},
}