import { _curry1 } from "../_curry-1";
import { _isPlaceholder } from "../_is-placeholder";

export function _curry2(fn) {
    return function curried(a, b) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return curried;
            }

            return _curry1((_b) => fn.call(this, a, _b));
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return curried;
        }

        if (_isPlaceholder(a)) {
            return _curry1((_a) => fn.call(this, _a, b));
        }

        if (_isPlaceholder(b)) {
            return _curry1((_b) => fn.call(this, a, _b));
        }

        return fn.call(this, a, b);
    };
}
