'use strict'
//imports.
const app = require('express')();
const bodyparser = require('./src/middleware').bodyparser;

//import env's
require('dotenv').config();
console.log(`The env setting is ${process.env.TEST_ENV ? 'Correct' : 'Failed:\nDid you change the ".env" file?'}.`);

//middlewares
app.use(bodyparser.jsonParser);
app.use(bodyparser.urlencodedParser);

//modules
const task = require('./src/components/task').router;
const user = require('./src/components/user').router;

//add routes
app.use('/task', task);
app.use('/user', user);

app.get('/', function (req, res) {
  res.json({ hola: "saludo" });
})

//export express app.
module.exports = app;
