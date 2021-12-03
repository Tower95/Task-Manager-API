'use strict'
const router = require('express').Router();
const User = require('./dal');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../../utils/generateJWT');
const e = require('express');


/**
 * @example
 * router.get('/', async (req, res) => {
 * let { data }= req.body
 * Logic....
 * res.json({payload:"all good!"});
 * }
 */

/**
 * User Endpoint HTML GET ALL
 */
router.get('/', async (req, res) => {

  let payload = undefined;
  payload = await User.getAll();
  if (!payload) {
    return res.status(402).json({})
  }
  res.json({ payload });

});

/**
 * User Endpoint HTML GET ONE:ID
 */
router.get('/:id', async (req, res) => {

  const { id } = req.params;

  let user = await User.getById(Number(id));

  if (!user) {
    return res.status(404).json({ payload: "user doesn't exist" });
  }

  res.json({ payload: user });

});

/**
 * User Endpoint HTML POST CREATE 
 */
router.post('/signup', async (req, res) => {
  let payload = undefined;
  const body = req.body;
  if(!body.password){return res.json({msg:"error"})}
  const salt = bcrypt.genSaltSync();
  let encrypter = bcrypt.hashSync(body.password, salt);

  const user = {
    name: body.name,
    email: body.email,
    role: body.role,
    password:encrypter
  }
 
  payload = await User.save(user);
  res.json({ payload });

});

/**
 * User Endpoint HTML POST SIGNIN
 */
router.post('/signin', async (req, res) => {
  let payload = undefined;
  let { email, password } = req.body

  if(!password || !email){
    payload = { msg: `need credentials: email & password` }
    return res.status(400).json({ payload: payload });
  }

  let user = await User.getByEmail(email);

  if (!user) {
    payload = { msg: `Can't find User` }
    return res.status(404).json({ payload: payload });
  }
 
  const validPassword = await bcrypt.compareSync(password, user.password);

  if (validPassword) {
    let token = generateJWT({
      name: user.name,
      id: user.id
    });

    return res.status(200).json({ token });
  }

  payload = { msg: `Incorrect Credentials` }
  return res.status(401).json({ payload: payload });
});


/**
 * User Endpoint HTML PUT UPDATE ONE:ID
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  const data = { name, email, role}
  let user = await User.updateById(Number(id), data);

  if (!user) {
    return res.status(404).json({ payload: "user doesn't exist" });
  }

  res.json({ payload: user });

});

/**
 * User Endpoint HTML DELETE ONE:ID
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let user = await User.deleteById(Number(id));
  if (!user) {
    return res.status(404).json({ payload: "user doesn't exist" });
  }

  res.json({ payload: user });

});



module.exports = router;
