import { _isArray } from "../_isArray";

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
export function _createReduce(reduceArray, reduceIterator, reduceByMethod) {
    return function _reduce(reducer, init, coll) {
        if (coll == null) {
            return init;
        }

        if (_isArray(coll)) {
            return reduceArray(reducer, init, coll);
        }

        if (coll[Symbol.iterator] != null) {
            return reduceIterator(reducer, init, coll);
        }

        if (typeof coll.next === "function") {
            return reduceIterator(reducer, init, coll);
        }

        if (typeof coll.reduce === "function") {
            return reduceByMethod("reduce", reducer, init, coll);
        }

        throw new TypeError("Cannot reduce a non-iterable object");
    };
}
