import { iSeqAsync } from "../iSeqAsync/iSeqAsync.js";

export function iAppendAsync(iterable, ...iterables) {
    return iSeqAsync(iterable, ...iterables);
}
