/**
 * Creates an iterator that appends multiple iterables to the given iterable.
 * @param {...Iterable} iterables - The iterables to append.
 * @returns {function(Iterable): Iterable} A function that takes an iterable and returns a new iterable with the appended values.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const moreNumbers = [4, 5];
 * const appendedNumbers = iAppend(moreNumbers)(numbers);
 * console.log([...appendedNumbers]); // [1, 2, 3, 4, 5]
 */
export function iAppend(...iterables: Iterable<any>[]): (arg0: Iterable<any>) => Iterable<any>;
