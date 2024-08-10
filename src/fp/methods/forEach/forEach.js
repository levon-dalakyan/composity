import { _curry2 } from "../../utils";

/**
 * Iterates over a collection, calling a provided function for each element.
 * @function
 * @param {Function} fn - The function to call for each element.
 * @param {Array} coll - The collection to iterate over.
 * @returns {Array} The original collection.
 *
 * @example
 * const logItem = x => console.log(x);
 * forEach(logItem, [1, 2, 3]); // Logs: 1, 2, 3
 */
export const forEach = _curry2(function (fn, coll) {
    for (let i = 0; i < coll.length; i++) {
        fn(coll[i]);
    }

    return coll;
});
