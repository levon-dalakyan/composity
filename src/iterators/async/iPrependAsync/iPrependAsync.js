import { iSeqAsync } from "../iSeqAsync/iSeqAsync.js";

export function iPrependAsync(iterable, ...iterables) {
    return iSeqAsync(...iterables, iterable);
}
