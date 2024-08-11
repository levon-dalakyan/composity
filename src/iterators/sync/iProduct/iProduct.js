import { iReduce } from "../iReduce";

export function iProduct(iterable) {
    return iReduce(iterable, (a, b) => a * b);
}
