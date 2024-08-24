/**
 * Creates an iterator that yields a slice of an iterable from a start index to an end index.
 * @param {number} from - The start index (inclusive).
 * @param {number} to - The end index (exclusive).
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator yielding the specified slice.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const sliced = iSlice(1, 4)(numbers);
 * console.log([...sliced]); // [2, 3, 4]
 */
export function iSlice(from: number, to: number): (arg0: Iterable<any>) => Iterator<any, any, undefined>;
