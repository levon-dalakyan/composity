import { iSeqAsync } from "../iSeqAsync";

/**
 * Creates an async iterator that appends multiple iterables to the given iterable.
 * @param {...AsyncIterable} iterables - The iterables to append.
 * @returns {function(AsyncIterable): AsyncIterable} A function that takes an async iterable and returns a new async iterable with the appended values.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3]; };
 * const moreNumbers = async function*() { yield* [4, 5]; };
 * const appendedNumbers = iAppendAsync(moreNumbers())(numbers());
 * for await (const num of appendedNumbers) {
 *   console.log(num);
 * }
 * // Output: 1, 2, 3, 4, 5
 */
export function iAppendAsync(...iterables) {
    return function (iterable) {
        return iSeqAsync(iterable, ...iterables);
    };
}
