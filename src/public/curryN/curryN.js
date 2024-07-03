import _p_ from "../_p_/_p_";
import { _curry1, _curry2 } from "../../private";
import _curryN from "../../private/_curryN/_curryN";

export function curryN(length, fn) {
    return _curryN(length, [], fn);
}
