'use strict'
const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const User = require('../components/user/dal');

/**
 * Middleware
 * @function middleware validated the request has the authorization header and it has a valid token.
 * @param {any} request express Object
 * @param {any} response express Object
 * @param {Function} next callback
 * @returns 
 */
const validateJWT = async (request = request, response = response, next) => {

  if (!request.url.includes('task') || request.url.includes('user/signin')) {
    next();
    return
  }
  if(request.url.includes('user/signup')){
    next();
    return
  }

  const token = request.header('Authorization') || request.header('authorization');
  if (!token) {
    response.status(401).json({
      ok: false,
      msg: 'there is no token in the request'
    });
    return
  }

  let UserReq = undefined;

  try {
    const payload = jwt.verify(token, process.env.SEED_TOKEN);
    UserReq = await User.getById(payload._id);

  } catch (error) {
    response.status(401).json({
      ok: false,
      msg: 'token not valid!'
    });
    return
  }

  if (!UserReq) {
    response.status(401).json({
      ok: false,
      msg: `this user acount: dosn't exist`
    });
    return
  }

  request.user = UserReq
  console.log("exec validation");
  next();

}


module.exports = {
  validateJWT
}
