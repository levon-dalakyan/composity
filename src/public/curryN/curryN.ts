import * as _ from "ts-toolbelt";
import _p_ from "../_p_/_p_";
import { _curry1, _curry2 } from "../../private";
import _curryN from "../../private/_curryN/_curryN";

/**
 * Returns a curried version of the provided function.
 *
 * @template F The type of the original function.
 * @param {F} fn The function to curry.
 * @returns {_.F.Curry<F>} The curried function.
 */
var curryN = _curry2(function curryN<F extends (...args: any) => any>(
    length: number,
    fn: F
) {
    if (length === 1) {
        return _curry1(fn);
    }

    return _curryN(length, [], fn);
});

export default curryN;
