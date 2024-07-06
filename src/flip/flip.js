import { curryN } from "../curry-n";
import { _reverseArray, _curry1 } from "../utils";

var flip = _curry1(function (fn) {
    return curryN(fn.length, function (...args) {
        return fn.apply(this, _reverseArray(args));
    });
});

export default flip;
