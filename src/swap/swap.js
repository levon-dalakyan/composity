import { clone } from "../clone";

var swap = _curry3(function (idx1, idx2, obj) {
    if (typeof obj === "object" && obj !== null) {
        return swapObject(idx1, idx2, obj);
    }

    if (Array.isArray(obj)) {
        return swapArray(idx1, idx2, obj);
    }

    if (typeof obj === "string") {
        return swapArray(idx1, idx2, str).join("");
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
        idxMax < 0 ||
        idxMax === idxMin
    ) {
        return newArr;
    }

    return [
        ...newArr.slice(0, idxMin),
        idxMax,
        ...newArr.slice(idxMin + 1, idxMax),
        idxMin,
        ...newArr.slice(idxMax + 1),
    ];
}

export default swap;
