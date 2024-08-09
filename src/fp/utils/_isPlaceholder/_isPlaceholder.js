/**
 * Checks if an argument is a placeholder.
 *
 * @function
 * @name _isPlaceholder
 * @param {*} arg - The argument to check.
 * @returns {boolean} True if the argument is a placeholder, false otherwise.
 * @description
 * This function determines if the provided argument is a placeholder.
 * A placeholder is an object with a specific property set to true.
 */
export function _isPlaceholder(arg) {
    return (
        typeof arg === "object" &&
        arg !== null &&
        arg["@@composize/placeholder"] === true
    );
}
