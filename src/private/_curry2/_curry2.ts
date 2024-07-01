import * as _ from "ts-toolbelt";
import { _curry1 } from "../_curry1";
import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function that has two arguments.
 *
 * @template F The type of the original function.
 * @param {F} fn The function to curry.
 * @returns {(this: ThisParameterType<F>, a: Parameters<F>[0], b: Parameters<F>[1]) => ReturnType<F>} The curried function.
 */
export function _curry2<F extends (...args: any) => any>(fn: F): _.F.Curry<F> {
    return function curried(this: ThisParameterType<F>, ...args: any) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(args[0])) {
                return curried;
            }

            return _curry1((_b: Parameters<F>[1]) =>
                fn.call(this, args[0], _b)
            );
        }

        if (_isPlaceholder(args[0]) && _isPlaceholder(args[1])) {
            return curried;
        }

        if (_isPlaceholder(args[0])) {
            return _curry1((_a: Parameters<F>[0]) =>
                fn.call(this, _a, args[1])
            );
        }

        if (_isPlaceholder(args[1])) {
            return _curry1((_b: Parameters<F>[1]) =>
                fn.call(this, args[0], _b)
            );
        }

        return fn.call(this, args[0], args[1]);
    };
}
