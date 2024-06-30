import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function that has a specified number of arguments.
 *
 * @template F The type of the original function.
 * @param {number} length The number of arguments the curried function should accept.
 * @param {any[]} entrance An array of initial arguments to the curried function.
 * @param {F} fn The function to curry.
 * @returns {(this: ThisParameterType<F>, ...args: any[]) => any} The curried function.
 */
export function _curryN<F extends (...args: any[]) => any>(
    length: number,
    entrance: any[],
    fn: F
) {
    return function (this: ThisParameterType<F>, ...args: any[]): any {
        let remains = length;
        const store = [];
        let storedIdx = 0;
        let argsIdx = 0;

        while (storedIdx < entrance.length || argsIdx < args.length) {
            let result;
            if (
                storedIdx < entrance.length &&
                (!_isPlaceholder(entrance[storedIdx]) || argsIdx >= args.length)
            ) {
                result = entrance[storedIdx];
            } else {
                result = args[argsIdx++];
            }

            if (!_isPlaceholder(result)) {
                remains--;
            }

            store[storedIdx++] = result;
        }

        if (remains <= 0) {
            return fn.apply(this, store);
        } else {
            return _curryN(length, store, fn);
        }
    };
}
