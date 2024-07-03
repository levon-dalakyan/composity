import _p_ from "../_p_/_p_";
import { _curry1 } from "../../private";
import { curryN } from "../curryN/curryN";

export function curry(fn) {
    return curryN(fn.length, fn);
}
