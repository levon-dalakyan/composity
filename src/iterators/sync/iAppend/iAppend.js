import { iSeq } from "../iSeq";

export function iAppend(...iterables) {
    return function (iterable) {
        return iSeq(iterable, ...iterables);
    };
}
