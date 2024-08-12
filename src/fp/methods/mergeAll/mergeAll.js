import { _curry2, _reduce } from "../../utils";
import { curry } from "../curry";

/**
 * Merges a list of objects into a single object.
 * @function
 * @param {...Object} objs - The objects to merge.
 * @returns {Object} A new object with all properties from the input objects.
 *
 * @example
 * console.log(mergeAll({a: 1}, {b: 2}, {c: 3})); // Output: {a: 1, b: 2, c: 3}
 */
export const mergeAll = curry(function (...objs) {
    return _reduce(
        objs,
        (merged, obj) => {
            if (Object(obj) === obj) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        merged[key] = obj[key];
                    }
                }
            }

            return merged;
        },
        {}
    );
});
