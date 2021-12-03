'use strict'
const Prisma = require('../../services/prisma');
const { handleError } = require('../../utils').ErrorHandel;


/**
 * @async
 * @function Save a new User in the DB.
 * @param {Object} user this has to contain all the scheme data.
 * @returns {Object} User saved in the DB.
 */
exports.save = async (user) => {
  let result = undefined;
  try {
    console.log(user);
    result = await Prisma.user.create({ data: user });
  }
  catch (error) {
    handleError(error); 
  }
  return result;
}

/** 
 * @async
 * @function This function get all the Users in the DB.
 * @returns Array Users
 */
exports.getAll = async () => {
  let result = undefined;
  try {
    result = await Prisma.user.findMany();
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function get a User by Id.
 * @param {Number} id 
 * @returns User finded.
 */
exports.getById = async (id) => {
  let result = undefined;
  try {
    result = await Prisma.user.findFirst({
      where: { id }
    });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function get a User by email.
 * @param {string} email
 * @returns User finded
 */
 exports.getByEmail = async (email) => {
  let result = undefined;
  try {
    result = await Prisma.user.findFirst({
      where: { email }
    });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function update a User by his ID
 * @param {Number} id 
 * @param {Object} user new data
 * @returns {Object} User modified in the DB,
 */
exports.updateById = async (id, user) => {
  let result = undefined;
  try {
    result = await Prisma.user.update({
      where: { id },
      data:  user 
    });
  }
  catch (error) {
    handleError(error);
  }
  return result;
}

/**
 * @async
 * @function Delete forever a User on the DB
 * @param {number} id 
 * @returns the object deleted.
 */
exports.deleteById = async (id) => {
  let result = undefined;
  try {
    result = await Prisma.user.delete({
      where: {id}
    })
  } 
  catch (error) {
    handleError(error);  
  }
  return result;
}
