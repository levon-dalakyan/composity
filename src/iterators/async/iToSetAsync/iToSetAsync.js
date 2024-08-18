/**
 * Converts an async iterable to a Set.
 * @param {AsyncIterable} iterable - The input async iterable.
 * @returns {Promise<Set>} A promise that resolves to a Set containing all unique elements from the async iterable.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 2, 3, 3, 3]; };
 * console.log(await iToSetAsync(numbers())); // Set(3) { 1, 2, 3 }
 */
export async function iToSetAsync(iterable) {
    const set = new Set();

    for await (const value of iterable) {
        set.add(value);
    }

    return set;
}
