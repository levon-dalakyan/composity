import { iReduceAsync } from "../iReduceAsync/iReduceAsync.js";

export function iSumAsync(iterable) {
    return iReduceAsync(iterable, (a, b) => a + b, 0);
}
