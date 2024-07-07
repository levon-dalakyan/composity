import _ from "../_";
import { _curry1 } from "../utils";
import { curryN } from "../curry-n";

export function curry(fn) {
    return curryN(fn.length, fn);
}
