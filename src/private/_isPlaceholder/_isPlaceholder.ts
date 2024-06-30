/**
 * Checks if the given argument is a placeholder.
 *
 * @param {any} arg The argument to check.
 * @return {boolean} Returns true if the argument is a placeholder, otherwise false.
 */
export function _isPlaceholder(arg: any) {
    return (
        typeof arg === "object" &&
        arg !== null &&
        Object.hasOwn(arg, "@@functiolize/placeholder")
    );
}
