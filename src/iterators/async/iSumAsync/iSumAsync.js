import { iReduceAsync } from "../iReduceAsync";

export function iSumAsync(iterable) {
    return iReduceAsync((a, b) => a + b, 0)(iterable);
}
