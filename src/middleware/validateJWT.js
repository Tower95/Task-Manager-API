'use strict'
const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const User = require('../components/user/dal');

const validateJWT = async (request = request, response = response, next) => {

  if (request.url === '/user/signin' || request.url === '/login' || request.url === '/user/signup') {
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
  next();

}


module.exports = {
  validateJWT
}
