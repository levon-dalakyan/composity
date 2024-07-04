import _p_ from "../_p_/_p_";
import { _curry1, _curry2 } from "../../utils";
import _curryN from "../../utils/_curryN/_curryN";

var curryN = _curry2(function curryN(length, fn) {
    if (length === 1) {
        return _curry1(fn);
    }

    return _arify(length, _curryN(length, [], fn));
});

export default curryN;
