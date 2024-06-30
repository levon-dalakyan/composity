import { _isPlaceholder } from "../_isPlaceholder";
import { _curry1 } from "../_curry1";
import { _curry2 } from "../_curry2";

/**
 * Returns a curried version of the provided function that has three arguments.
 *
 * @template F The type of the original function.
 * @param {F} fn The function to curry.
 * @returns {(this: ThisParameterType<F>, a: Parameters<F>[0], b: Parameters<F>[1], c: Parameters<F>[2]) => ReturnType<F>} The curried function.
 */
export function _curry3<F extends (a: any, b: any, c: any) => any>(fn: F) {
    return function curried(
        this: ThisParameterType<F>,
        a: Parameters<F>[0] = undefined,
        b: Parameters<F>[1] = undefined,
        c: Parameters<F>[2] = undefined
    ) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return curried;
            }

            return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                fn.call(this, a, _b, _c)
            );
        }

        if (arguments.length === 2) {
            if (_isPlaceholder(a) && _isPlaceholder(b)) {
                return curried;
            }

            if (_isPlaceholder(a)) {
                return _curry2((_a: Parameters<F>[0], _c: Parameters<F>[2]) =>
                    fn.call(this, _a, b, _c)
                );
            }

            if (_isPlaceholder(b)) {
                return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                    fn.call(this, a, _b, _c)
                );
            }

            return _curry1((_c: Parameters<F>[2]) => fn.call(this, a, b, _c));
        }

        if (_isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)) {
            return curried;
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return _curry2((_a: Parameters<F>[0], _b: Parameters<F>[1]) =>
                fn.call(this, _a, _b, c)
            );
        }

        if (_isPlaceholder(a) && _isPlaceholder(c)) {
            return _curry2((_a: Parameters<F>[0], _c: Parameters<F>[2]) =>
                fn.call(this, _a, b, _c)
            );
        }

        if (_isPlaceholder(b) && _isPlaceholder(c)) {
            return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                fn.call(this, a, _b, _c)
            );
        }

        if (_isPlaceholder(a)) {
            return _curry1((_a: Parameters<F>[0]) => fn.call(this, _a, b, c));
        }

        if (_isPlaceholder(b)) {
            return _curry1((_b: Parameters<F>[1]) => fn.call(this, a, _b, c));
        }

        if (_isPlaceholder(c)) {
            return _curry1((_c: Parameters<F>[2]) => fn.call(this, a, b, _c));
        }

        return fn.call(this, a, b, c);
    };
}
