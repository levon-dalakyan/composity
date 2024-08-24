/**
 * Creates a function that finds the first element in an iterable that satisfies a predicate.
 * @param {function(any): boolean} predicate - A function that returns true for the desired element.
 * @returns {function(Iterable): any} A function that takes an iterable and returns the first matching element or undefined.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const firstEven = iFind(x => x % 2 === 0)(numbers);
 * console.log(firstEven); // 2
 */
export function iFind(predicate: (arg0: any) => boolean): (arg0: Iterable<any>) => any;
