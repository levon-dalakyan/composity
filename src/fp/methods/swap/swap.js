import { _curry3 } from "../../utils";
import { clone } from "../clone";

/**
 * Swaps two elements in an array, object, or string.
 * @function
 * @param {number|string} idx1 - The first index or key.
 * @param {number|string} idx2 - The second index or key.
 * @param {Array|Object|string} obj - The collection to perform the swap on.
 * @returns {Array|Object|string} A new collection with the elements swapped.
 *
 * @example
 * console.log(swap(0, 2, [1, 2, 3])); // Output: [3, 2, 1]
 * console.log(swap("a", "b", {a: 1, b: 2, c: 3})); // Output: {a: 2, b: 1, c: 3}
 * console.log(swap(0, 2, "abc")); // Output: "cba"
 */
export const swap = _curry3(function (idx1, idx2, coll) {
    if (typeof coll === "object" && coll !== null) {
        return swapObject(idx1, idx2, coll);
    }

    if (Array.isArray(coll)) {
        return swapArray(idx1, idx2, coll);
    }

    if (typeof coll === "string") {
        return swapArray(idx1, idx2, coll).join("");
    }
});

function swapObject(idx1, idx2, obj) {
    const newObj = clone(obj);

    if (newObj.hasOwnProperty(idx1) && newObj.hasOwnProperty(idx2)) {
        const temp = newObj[idx1];
        newObj[idx1] = newObj[idx2];
        newObj[idx2] = temp;
    }

    return newObj;
}

function swapArray(idx1, idx2, arr) {
    const newArr = [...arr];

    const idx1Norm = idx1 < 0 ? idx1 + newArr.length : idx1;
    const idx2Norm = idx2 < 0 ? idx2 + newArr.length : idx2;

    const idxMax = Math.max(idx1Norm, idx2Norm);
    const idxMin = Math.min(idx1Norm, idx2Norm);

    if (
        idxMax > newArr.length ||
        idxMin > newArr.length ||
        idxMax < 0 ||
        idxMin < 0 ||
        idxMax === idxMin
    ) {
        return newArr;
    }

    return [
        ...newArr.slice(0, idxMin),
        newArr[idxMax],
        ...newArr.slice(idxMin + 1, idxMax),
        newArr[idxMin],
        ...newArr.slice(idxMax + 1),
    ];
}
