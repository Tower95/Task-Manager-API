'use strict'
const jwt = require('jsonwebtoken');

/**
 * @function generate a json web token.
 * @param {Object} data to insert in the payload of the token.
 * @returns token valid for a x time.
 */
const generateJWT = (data) => {
  
  if (data === undefined) {
    throw new Error('can\'t generate Token');
  }
  //get de user id from the object 
  const payload = {
    _id: data._id,
    ImageUser: data.userImage,
    username: data.username
  };

  return jwt.sign(payload, process.env.SEED_TOKEN, { expiresIn: '12h' },);
}

module.exports = { generateJWT }
