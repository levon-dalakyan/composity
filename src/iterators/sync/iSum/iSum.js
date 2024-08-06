import { iReduce } from "../iReduce/iReduce.js";

export function iSum(iterable) {
    return iReduce(iterable, (a, b) => a + b, 0);
}
