/**
 * Creates a function that finds the first element in an async iterable that satisfies a predicate.
 * @param {function(any): boolean} predicate - A function that returns true for the desired element.
 * @returns {function(AsyncIterable): Promise<any>} A function that takes an async iterable and returns a promise that resolves to the first matching element or undefined.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * const firstEven = await iFindAsync(x => x % 2 === 0)(numbers());
 * console.log(firstEven); // 2
 */
export function iFindAsync(predicate: (arg0: any) => boolean): (arg0: AsyncIterable<any>) => Promise<any>;
