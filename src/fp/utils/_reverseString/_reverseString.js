/**
 * Reverses a string.
 *
 * @function
 * @name _reverseString
 * @param {string} string - The string to reverse.
 * @returns {string} The reversed string.
 * @description
 * This function takes a string as input and returns a new string with
 * the characters in reverse order.
 */
export function _reverseString(string) {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}
