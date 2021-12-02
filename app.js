'use strict'
//imports.
const app = require('express')();
const bodyparser = require('./src/middleware').bodyparser;
require('dotenv').config();

//import env's
console.log(`The env setting is: ${process.env.TEST_ENV || false}`);

//middlewares
app.use(bodyparser.jsonParser);
app.use(bodyparser.urlencodedParser);


//routes
app.get('/', function (req, res) {
  res.json({hola:"saludo"});
})

//export express app.
module.exports = app;
