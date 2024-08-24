/**
 * Creates an iterator that repeats the given iterable a specified number of times.
 * @param {number} [amount=Infinity] - The number of times to repeat the iterable.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns a repeating iterator.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const repeatedTwice = iRepeat(2)(numbers);
 * console.log([...repeatedTwice]); // [1, 2, 3, 1, 2, 3]
 */
export function iRepeat(amount?: number): (arg0: Iterable<any>) => Iterator<any, any, undefined>;
