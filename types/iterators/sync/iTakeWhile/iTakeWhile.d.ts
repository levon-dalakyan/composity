/**
 * Creates an iterator that yields elements from the beginning of an iterable while a predicate returns true.
 * @param {function(any): boolean} predicate - A function that returns true for elements to be taken.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator yielding elements while the predicate is true.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5, 1, 2];
 * const takeLessThan4 = iTakeWhile(x => x < 4)(numbers);
 * console.log([...takeLessThan4]); // [1, 2, 3]
 */
export function iTakeWhile(predicate: (arg0: any) => boolean): (arg0: Iterable<any>) => Iterator<any, any, undefined>;
