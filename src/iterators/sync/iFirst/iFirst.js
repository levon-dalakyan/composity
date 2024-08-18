/**
 * Returns the first element of an iterable.
 * @param {Iterable} iterable - The input iterable.
 * @returns {any} The first element of the iterable, or undefined if the iterable is empty.
 *
 * @example
 * const fruits = ['apple', 'banana', 'cherry'];
 * console.log(iFirst(fruits)); // 'apple'
 */
export function iFirst(iterable) {
    const iterator = iterable[Symbol.iterator]();

    return iterator.next().value;
}
