import { iReduceAsync } from "../iReduceAsync/iReduceAsync.js";

export function iProductAsync(iterable) {
    return iReduceAsync(iterable, (a, b) => a * b);
}
