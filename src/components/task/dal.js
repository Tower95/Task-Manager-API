'use strict'
 const Prisma = require('../../services/prisma');
const { handleError } = require('../../utils').ErrorHandel;

/**
 * @async
 * @function Save a new task in the DB.
 * @param {Object} task this has to contain all the scheme data.
 * @returns {Object} task saved in the DB.
 */
exports.save = async (task) => {
  let result = undefined;
  try {
    console.log(task);
    result = await Prisma.task.create({ data: task });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function This function get all the tasks in the DB.
 * @argument {Number} onCharge id
 * @returns Array tasks
 */
exports.getAll = async (id) => {
  let result = undefined;
  try {
    result = await Prisma.task.findMany({where : {onCharge:id}});
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function get a task by Id.
 * @param {Number} id task 
 * @param {Number} user id.
 * @returns 
 */
exports.getById = async (id,user) => {
  let result = undefined;
  try {
    result = await Prisma.task.findFirst({
      where: { id , onCharge:user}
    });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function update a task by his ID
 * @param {Number} id of task
 * @param {Number} user  id user
 * @param {Object} task new data
 * @returns {Object} task modified in the DB,
 */
exports.updateById = async (id, task) => {
  let result = undefined;
  try {
    result = await Prisma.task.update({
      where: { id  },
      data:  task 
    });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function Delete forever a task on the DB
 * @param {number} id 
 * @returns the object deleted.
 */
exports.deleteById = async (id) => {
  let result = undefined;
  try {
    result = await Prisma.task.delete({
      where: {id}
    })
  } 
  catch (error) {
    handleError(error);  
  }
  return result;
}
