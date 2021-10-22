'use strict';

const express = require('express');
const app = express();
const clothesRouter = require('/routes/clothes.js');
const foodRouter = require('./routes/food.js');


const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
// const person = require('./lib/person.js')

app.use(express.json());
app.use(logger);
// app.use(handleError)

// app.get('/clothes');
// app.get('/clothes');
// app.post('/clothes');
// app.put('/clothes');
// app.delete('/clothes');
app.use('/api', apiRouter);
app.use('/clothes', clothesRouter);


// app.get('/food');
// app.get('/food');
// app.post('/food');
// app.put('/food');
// app.delete('/food');
app.use('/api', apiRouter);
app.use('/food', foodRouter);

module.exports = {
    server: app,
    start: port => {app.listen(port, () => console.log('Server is up'))},
}