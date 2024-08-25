/**
 * Creates an iterator that applies a side-effect function to each element of an iterable without modifying the elements.
 * @param {function(any): void} fn - A function to be called for each element.
 * @returns {function(Iterable): Iterator} A function that takes an iterable and returns an iterator applying the side-effect function.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const logged = iTap(console.log)(numbers);
 * [...logged]; // Logs: 1, 2, 3
 */
export function iTap(fn: (arg0: any) => void): (arg0: Iterable<any>) => Iterator<any, any, undefined>;