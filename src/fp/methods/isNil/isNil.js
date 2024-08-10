import { _curry1 } from "../../utils";

/**
 * Checks if a value is null or undefined.
 * @function
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, false otherwise.
 *
 * @example
 * console.log(isNil(null)); // Output: true
 * console.log(isNil(undefined)); // Output: true
 * console.log(isNil(0)); // Output: false
 */
export const isNil = _curry1(function (value) {
    return value == null;
});
