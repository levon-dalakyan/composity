/**
 * Checks if a number is an integer.
 *
 * @function
 * @name _isInteger
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is an integer, false otherwise.
 * @description
 * This function determines if the provided number is an integer by using
 * bitwise operations.
 */
export function _isInteger(num) {
    return num << 0 === num;
}
