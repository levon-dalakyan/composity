/**
 * Counts the number of elements in an async iterable.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {Promise<number>} A promise that resolves to the number of elements in the iterable.
 *
 * @example
 * const letters = async function*() { yield* ['a', 'b', 'c']; };
 * console.log(await iCountAsync(letters())); // 3
 */
export async function iCountAsync(iterable) {
    let counter = 0;

    for await (const _ of iterable) {
        counter++;
    }

    return counter;
}
