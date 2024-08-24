/**
 * Creates an iterator that sequentially yields elements from multiple iterables.
 * @param {...Iterable} iterables - The input iterables.
 * @returns {Iterator} An iterator that yields elements from all input iterables in sequence.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const letters = ['a', 'b', 'c'];
 * const combined = iSeq(numbers, letters);
 * console.log([...combined]); // [1, 2, 3, 'a', 'b', 'c']
 */
export function iSeq(...iterables: Iterable<any>[]): Iterator<any, any, undefined>;
