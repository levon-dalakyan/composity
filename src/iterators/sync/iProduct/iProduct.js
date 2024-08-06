import { iReduce } from "../iReduce/iReduce.js";

export function iProduct(iterable) {
    return iReduce(iterable, (a, b) => a * b);
}
