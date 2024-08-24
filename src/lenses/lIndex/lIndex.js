import { lLens } from "../lLens";

export function lIndex(index) {
    return lLens(
        (arr) => arr[index],
        (value, arr) => arr.map((el, i) => (i === index ? value : el))
    );
}
