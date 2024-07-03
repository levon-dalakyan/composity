/**
 * A function that returns the input argument as is.
 *
 * @param {T} arg The input argument of type T.
 * @return {T} The input argument of type T.
 */
export function _same<T>(arg: T): T {
    return arg;
}
