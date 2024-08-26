import { lLens } from "../lLens";

/**
 * Creates a lens for accessing an element at a specific index in an array.
 * @param {number} index - The index to focus on.
 * @returns {Object} A lens for the specified index.
 *
 * @example
 * const data = ['a', 'b', 'c'];
 * const secondElementLens = lIndex(1);
 * console.log(lView(secondElementLens, data)); // 'b'
 * console.log(lSet(secondElementLens, 'x', data)); // ['a', 'x', 'c']
 */
export function lIndex(index) {
    return lLens(
        (arr) => arr[index],
        (value, arr) => arr.map((el, i) => (i === index ? value : el))
    );
}
