import { iReduce } from "../iReduce";

export function iSum(iterable) {
    return iReduce(iterable, (a, b) => a + b, 0);
}
