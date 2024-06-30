import { _curry1 } from "../_curry1";
import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function that has two arguments.
 *
 * @template F - The type of the original function.
 * @param {F} fn - The function to curry.
 * @returns {(this: ThisParameterType<F>, a: Parameters<F>[0], b: Parameters<F>[1]) => ReturnType<F>} - The curried function.
 */
export function _curry2<F extends (a: any, b: any) => any>(fn: F) {
    return function curried(
        this: ThisParameterType<F>,
        a: Parameters<F>[0] = undefined,
        b: Parameters<F>[1] = undefined
    ) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return curried;
            }

            return _curry1((_b: Parameters<F>[1]) => fn.call(this, a, _b));
        }

        if (arguments.length >= 2) {
            if (_isPlaceholder(a) && _isPlaceholder(b)) {
                return curried;
            }

            if (_isPlaceholder(a)) {
                return _curry1((_a: Parameters<F>[0]) => fn.call(this, _a, b));
            }

            if (_isPlaceholder(b)) {
                return _curry1((_b: Parameters<F>[1]) => fn.call(this, a, _b));
            }

            return fn.call(this, a, b);
        }
    };
}
