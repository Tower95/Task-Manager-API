'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {

  console.log(req.body);
  res.json({ msg: '/ GET' });

});

router.get('/:id', (req, res) => {

  res.json({ msg: '/ GET :id' });

});

router.post('/', (req, res) => {

  res.json({ msg: '/ POST' });

});

router.put('/:id', (req, res) => {

  res.json({ msg: '/ PUT' });

});

router.delete('/:id', (req, res) => {

  res.json({ msg: '/ DELETE' });
  
});

module.exports = router;
