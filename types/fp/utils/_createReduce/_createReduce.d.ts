/**
 * Creates a reduce function that can handle different types of collections.
 *
 * @function
 * @name _createReduce
 * @param {Function} reduceArray - Function to reduce arrays.
 * @param {Function} reduceIterator - Function to reduce iterables.
 * @param {Function} reduceByMethod - Function to reduce objects with a reduce method.
 * @returns {Function} A reduce function that can handle various collection types.
 * @description
 * This function creates a versatile reduce function that can work with arrays,
 * iterables, and objects with a reduce method.
 */
export function _createReduce(reduceArray: Function, reduceIterator: Function, reduceByMethod: Function): Function;
