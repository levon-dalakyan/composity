import { iSeqAsync } from "../iSeqAsync";

export function iAppendAsync(...iterables) {
    return function (iterable) {
        return iSeqAsync(iterable, ...iterables);
    };
}
