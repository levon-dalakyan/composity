import * as _ from "ts-toolbelt";
import _p_ from "../_p_/_p_";
import { _curry1 } from "../../private";
import { curryN } from "../curryN/curryN";

/**
 * Returns a curried version of the provided function.
 *
 * @template F The type of the original function.
 * @param {F} fn The function to curry.
 * @returns {_.F.Curry<F>} The curried function.
 */
export function curry<F extends (...args: any) => any>(fn: F): _.F.Curry<F> {
    return curryN(fn.length, fn);
}
