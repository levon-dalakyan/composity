import { iSeqAsync } from "../iSeqAsync";

export function iPrependAsync(...iterables) {
    return function (iterable) {
        return iSeqAsync(...iterables, iterable);
    };
}
