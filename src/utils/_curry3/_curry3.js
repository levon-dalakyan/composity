import { _isPlaceholder } from "../_isPlaceholder";
import { _curry1 } from "../_curry1";
import { _curry2 } from "../_curry2";

export function _curry3(fn) {
    return function curried(a, b, c) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(a)) {
                return curried;
            }

            return _curry2((_b, _c) => fn.call(this, a, _b, _c));
        }

        if (arguments.length === 2) {
            if (_isPlaceholder(a) && _isPlaceholder(b)) {
                return curried;
            }

            if (_isPlaceholder(a)) {
                return _curry2((_a, _c) => fn.call(this, _a, b, _c));
            }

            if (_isPlaceholder(b)) {
                return _curry2((_b, _c) => fn.call(this, a, _b, _c));
            }

            return _curry1((_c) => fn.call(this, a, b, _c));
        }

        if (_isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)) {
            return curried;
        }

        if (_isPlaceholder(a) && _isPlaceholder(b)) {
            return _curry2((_a, _b) => fn.call(this, _a, _b, c));
        }

        if (_isPlaceholder(a) && _isPlaceholder(c)) {
            return _curry2((_a, _c) => fn.call(this, _a, b, _c));
        }

        if (_isPlaceholder(b) && _isPlaceholder(c)) {
            return _curry2((_b, _c) => fn.call(this, a, _b, _c));
        }

        if (_isPlaceholder(a)) {
            return _curry1((_a) => fn.call(this, _a, b, c));
        }

        if (_isPlaceholder(b)) {
            return _curry1((_b) => fn.call(this, a, _b, c));
        }

        if (_isPlaceholder(c)) {
            return _curry1((_c) => fn.call(this, a, b, _c));
        }

        return fn.call(this, a, b, c);
    };
}
