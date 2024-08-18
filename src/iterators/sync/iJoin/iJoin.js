import { iToArray } from "../iToArray";

/**
 * Creates a function that joins the elements of an iterable into a string.
 * @param {string} [separator=''] - The separator to use between elements.
 * @returns {function(Iterable): string} A function that takes an iterable and returns a joined string.
 *
 * @example
 * const words = ['Hello', 'world', '!'];
 * const joinWithSpace = iJoin(' ');
 * console.log(joinWithSpace(words)); // 'Hello world !'
 */
export function iJoin(separator = "") {
    return function (iterable) {
        return iToArray(iterable).join(separator);
    };
}
