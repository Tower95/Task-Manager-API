'use strict'
/**
 * this is the bodyparser to add
 * and obj Body in the req Obj.
 */
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = {
  jsonParser,
  urlencodedParser
}
