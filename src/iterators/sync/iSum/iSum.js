import { iReduce } from "../iReduce";

export function iSum(iterable) {
    return iReduce((a, b) => a + b, 0)(iterable);
}
