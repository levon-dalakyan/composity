import { _arify } from "../../utils";

/**
 * Partially applies a function, returning a new function that expects the remaining arguments.
 * @function
 * @param {Function} fn - The function to partially apply.
 * @param {...*} args - The arguments to partially apply.
 * @returns {Function} A new function with some arguments of the original function applied.
 *
 * @example
 * const greet = (greeting, name) => `${greeting}, ${name}!`;
 * const sayHello = partial(greet, "Hello");
 * console.log(sayHello("World")); // Output: "Hello, World!"
 */
export const partial = function (fn, ...args) {
    return _arify(Math.max(0, fn.length - args.length), function (...nextArgs) {
        return fn.call(this, ...args, ...nextArgs);
    });
};
