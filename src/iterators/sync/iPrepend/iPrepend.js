import { iSeq } from "../iSeq/iSeq.js";

export function iPrepend(iterable, ...iterables) {
    return iSeq(...iterables, iterable);
}
