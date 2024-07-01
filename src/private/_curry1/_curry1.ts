import { _isPlaceholder } from "../_isPlaceholder";

/**
 * Returns a curried version of the provided function with one argument.
 *
 * @param {P | undefined} arg - The argument to be passed to the curried function.
 * @return {(...args: any[]) => any} The curried function.
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
