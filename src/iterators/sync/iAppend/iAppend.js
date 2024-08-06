import { iSeq } from "../iSeq/iSeq.js";

export function iAppend(iterable, ...iterables) {
    return iSeq(iterable, ...iterables);
}
