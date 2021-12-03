'use strict'
//imports.
var path = require('path');
const express =require('express');
const app = express();
const bodyparser = require('./src/middleware').bodyparser;
const validateJWT = require('./src/middleware/validateJWT').validateJWT

//import env's
require('dotenv').config();
console.log(`The env setting is ${process.env.TEST_ENV ? 'Correct' : 'Failed:\nDid you change the ".env" file?'}.`);

//middlewares
app.use(bodyparser.jsonParser);
app.use(bodyparser.urlencodedParser); 
app.use(validateJWT);


//modules
const task = require('./src/components/task').router;
const user = require('./src/components/user').router;

//add routes
app.use('/task', task);
app.use('/user', user);
app.use(express.static("doc"));

//export express app.
module.exports = app;
