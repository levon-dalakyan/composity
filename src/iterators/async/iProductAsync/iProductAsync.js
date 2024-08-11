import { iReduceAsync } from "../iReduceAsync";

export function iProductAsync(iterable) {
    return iReduceAsync(iterable, (a, b) => a * b);
}
