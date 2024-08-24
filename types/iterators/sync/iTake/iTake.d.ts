/**
 * Creates an iterator that yields a specified number of elements from the beginning of an iterable.
 * @param {number} amount - The number of elements to take.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator yielding the specified number of elements.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const takeThree = iTake(3)(numbers);
 * console.log([...takeThree]); // [1, 2, 3]
 */
export function iTake(amount: number): (arg0: Iterable<any>) => Iterator<any, any, undefined>;
