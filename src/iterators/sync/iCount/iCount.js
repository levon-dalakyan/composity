/**
 * Counts the number of elements in an iterable.
 * @param {Iterable} iterable - The input iterable.
 * @returns {number} The number of elements in the iterable.
 *
 * @example
 * const letters = ['a', 'b', 'c'];
 * console.log(iCount(letters)); // 3
 */
export function iCount(iterable) {
    let counter = 0;

    for (const _ of iterable) {
        counter++;
    }

    return counter;
}
