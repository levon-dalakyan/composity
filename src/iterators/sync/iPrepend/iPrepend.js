import { iSeq } from "../iSeq";

export function iPrepend(...iterables) {
    return function (iterable) {
        return iSeq(...iterables, iterable);
    };
}
