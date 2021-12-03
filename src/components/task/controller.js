'use strict'
const router = require('express').Router();
const Task = require('./dal');

/**
 * Task Endpoint HTML GET ALL
 */
router.get('/', async (req, res) => {
  let payload = undefined;
  payload = await Task.getAll();
  res.json({ payload });
});

/**
 * User Endpoint HTML GET ONE:ID
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  let task = await Task.getById(Number(id));

  if (!task) {
    return res.status(404).json({ payload: "task doesn't exist" });
  }

  res.json({ payload: task });
});

/**
 * User Endpoint HTML POST CREATE
 */
router.post('/', async (req, res) => {
  let payload = undefined;
  const {
    title,
    description,
    status,
    comments,
    onCharge,
    tags,
    dateLimit
  } = req.body
  let task = {
    title,
    description,
    status,
    comments,
    onCharge: req.user.id,
    tags,
    dateLimit: new Date(dateLimit)
  }
  payload = await Task.save(task);
  if (!payload) {
    return res.json({ msg: `can't create task` });
  }
  return res.status(201).json({ payload });
});

/**
 * User Endpoint HTML UPDATE:ID
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    status,
    comments,
    onCharge,
    tags,
    dateLimit
  } = req.body
  let data = {
    title,
    description,
    status,
    comments,
    tags,
    dateLimit
  }
  let task = await Task.updateById(Number(id), data);

  if (!task) {
    return res.status(404).json({ payload: "task doesn't exist" });
  }

  res.json({ payload: task });
});

/**
 * User Endpoint HTML DELETE ONE:ID
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let task = await Task.deleteById(Number(id));
  if (!task) {
    return res.status(404).json({ payload: "task doesn't exist" });
  }

  res.json({ payload: task });
});

module.exports = router;
