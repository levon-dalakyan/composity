/**
 * Determines whether the given value is an array.
 *
 * @function
 * @name _isArray
 * @param {*} obj - The value to be checked.
 * @returns {boolean} Returns true if the value is an array, otherwise false.
 * @description
 * This function uses the native Array.isArray method if available.
 * If Array.isArray is not supported, it falls back to using the
 * Object.prototype.toString method to check if the object is an array.
 */
export const _isArray =
    typeof Array.isArray === "function"
        ? Array.isArray
        : function (obj) {
              return toString.call(obj) === "[object Array]";
          };
