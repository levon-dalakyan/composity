import { _curry3 } from "../_curry3";
import { _isPlaceholder } from "../_isPlaceholder";
import { _arify } from "../_arify";

/**
 * Creates a curried function with a specified arity.
 *
 * @function
 * @name _curryN
 * @param {number} length - The desired arity of the curried function.
 * @param {Array} entrance - Initial arguments to be applied.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} A curried version of the input function with the specified arity.
 * @description
 * This function creates a curried version of the input function with a specified arity.
 * It allows for partial application and handles placeholders for more flexible currying.
 */
export const _curryN = _curry3(function (length, entrance, fn) {
    return function (...args) {
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
            return _arify(Math.max(0, remains), _curryN(length, store, fn));
        }
    };
});
