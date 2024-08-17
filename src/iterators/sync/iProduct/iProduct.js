import { iReduce } from "../iReduce";

export function iProduct(iterable) {
    return iReduce((a, b) => a * b)(iterable);
}
