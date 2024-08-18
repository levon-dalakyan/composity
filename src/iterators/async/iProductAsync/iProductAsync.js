import { iReduceAsync } from "../iReduceAsync";

export function iProductAsync(iterable) {
    return iReduceAsync((a, b) => a * b)(iterable);
}
