import { _createReduce } from "../_createReduce";
import { _reduceArray } from "../_reduceArray";
import { _reduceByMethod } from "../_reduceByMethod";
import { _reduceIterator } from "../_reduceIterator";

/**
 * Reduces a collection to a single value.
 *
 * @function
 * @name _reduce
 * @param {Function} reducer - The reducer function.
 * @param {*} init - The initial value for the reduction.
 * @param {Array|Iterable|Object} coll - The collection to reduce.
 * @returns {*} The result of the reduction.
 * @description
 * This function reduces a collection (array, iterable, or object with a reduce method)
 * to a single value using the provided reducer function and initial value.
 */
export const _reduce = _createReduce(
    _reduceArray,
    _reduceIterator,
    _reduceByMethod
);
