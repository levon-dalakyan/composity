import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function with one argument.
 *
 * @template P The type of the argument.
 * @template R The type of the return value.
 * @param {(...args: P) => R} fn The original function.
 * @return {(...args: P | undefined) => (...args: P | undefined) => R} The curried function.
 */
export function _curry1<P, R>(fn: (arg: P) => R) {
    return function curried(
        this: ThisParameterType<typeof fn>,
        arg: P | undefined = undefined
    ) {
        if (arguments.length === 0 || _isPlaceholder(arg)) {
            return curried;
        }

        return fn.call(this, arg as P);
    };
}
