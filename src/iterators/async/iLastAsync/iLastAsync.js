/**
 * Returns the last element of an async iterable.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {Promise<any>} A promise that resolves to the last element of the iterable, or undefined if the iterable is empty.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3, 4, 5]; };
 * console.log(await iLastAsync(numbers())); // 5
 */
export async function iLastAsync(iterable) {
    let result;

    for await (const value of iterable) {
        result = value;
    }

    return result;
}
