import { iToArrayAsync } from "../iToArrayAsync";

/**
 * Creates a function that joins the elements of an async iterable into a string.
 * @param {string} [separator=''] - The separator to use between elements.
 * @returns {function(AsyncIterable): Promise<string>} A function that takes an async iterable and returns a promise that resolves to a joined string.
 *
 * @example
 * const words = async function*() { yield* ['Hello', 'world', '!']; };
 * const joinWithSpace = iJoinAsync(' ');
 * console.log(await joinWithSpace(words())); // 'Hello world !'
 */
export function iJoinAsync(separator = "") {
    return async function (iterable) {
        return await iToArrayAsync(iterable).then((array) =>
            array.join(separator)
        );
    };
}
