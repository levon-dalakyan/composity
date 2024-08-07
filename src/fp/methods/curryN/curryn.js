import { _curry1, _curry2, _curryN, _arify } from "../utils";

var curryN = _curry2(function curryN(length, fn) {
    if (length === 1) {
        return _curry1(fn);
    }

    return _arify(length, _curryN(length, [], fn));
});

export default curryN;
