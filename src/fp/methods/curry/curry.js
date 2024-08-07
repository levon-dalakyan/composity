import _ from "../_";
import { _curry1 } from "../../utils";
import { curryN } from "../curryN";

export function curry(fn) {
    return curryN(fn.length, fn);
}
