import { iToArray } from "../iToArray";

export function iJoin(separator = "") {
    return function (iterable) {
        return iToArray(iterable).join(separator);
    };
}
