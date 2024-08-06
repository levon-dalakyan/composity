import { iToArray } from "../iToArray/iToArray.js";

export function iJoin(iterable, separator = "") {
    return iToArray(iterable).join(separator);
}
