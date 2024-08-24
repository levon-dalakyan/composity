/**
 * Creates an iterator that prepends multiple iterables to the given iterable.
 * @param {...Iterable} iterables - The iterables to prepend.
 * @returns {function(Iterable): Iterable} A function that takes an iterable and returns a new iterable with the prepended values.
 *
 * @example
 * const numbers = [3, 4, 5];
 * const moreNumbers = [1, 2];
 * const prependedNumbers = iPrepend(moreNumbers)(numbers);
 * console.log([...prependedNumbers]); // [1, 2, 3, 4, 5]
 */
export function iPrepend(...iterables: Iterable<any>[]): (arg0: Iterable<any>) => Iterable<any>;
