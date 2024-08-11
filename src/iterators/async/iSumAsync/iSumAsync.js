import { iReduceAsync } from "../iReduceAsync";

export function iSumAsync(iterable) {
    return iReduceAsync(iterable, (a, b) => a + b, 0);
}
