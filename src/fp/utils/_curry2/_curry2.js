import { _curry1 } from "../_curry1";
import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Curries a function of arity 2.
 *
 * @function
 * @name _curry2
 * @param {Function} fn - The function to be curried.
 * @returns {Function} A curried version of the input function.
 * @description
 * This function transforms a function of arity 2 into a curried version.
 * It handles various cases of argument provision and placeholder usage.
 */
export function _curry2(fn) {
    return function curried(a, b) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return curried;
            }

            return _curry1((_b) => fn.call(this, a, _b));
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return curried;
        }

        if (_isPlaceholder(a)) {
            return _curry1((_a) => fn.call(this, _a, b));
        }

        if (_isPlaceholder(b)) {
            return _curry1((_b) => fn.call(this, a, _b));
        }

        return fn.call(this, a, b);
    };
}
