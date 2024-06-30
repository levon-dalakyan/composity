import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function that has one argument.
 *
 * @template F The type of the original function.
 * @param {F} fn The function to curry.
 * @returns {(this: ThisParameterType<F>, arg: Parameters<F>[0]) => ReturnType<F>} The curried function.
 */
export function _curry1<F extends (arg: any) => any>(fn: F) {
    return function curried(
        this: ThisParameterType<F>,
        arg: Parameters<F>[0] = undefined
    ) {
        if (arguments.length === 0 || _isPlaceholder(arg)) {
            return curried;
        }

        return fn.call(this, arg);
    };
}
