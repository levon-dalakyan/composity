import { _isPlaceholder } from "../_is-placeholder";

export function _curry1(fn) {
    return function curried(arg) {
        if (arguments.length === 0 || _isPlaceholder(arg)) {
            return curried;
        }

        return fn.call(this, arg);
    };
}