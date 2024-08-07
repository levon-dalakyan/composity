import { _curry3 } from "../_curry3";
import { _isPlaceholder } from "../_isPlaceholder";
import { _arify } from "../_arify";

export const _curryN = _curry3(function (length, entrance, fn) {
    return function (...args) {
        let remains = length;
        const store = [];
        let storedIdx = 0;
        let argsIdx = 0;

        while (storedIdx < entrance.length || argsIdx < args.length) {
            let result;
            if (
                storedIdx < entrance.length &&
                (!_isPlaceholder(entrance[storedIdx]) || argsIdx >= args.length)
            ) {
                result = entrance[storedIdx];
            } else {
                result = args[argsIdx++];
            }

            if (!_isPlaceholder(result)) {
                remains--;
            }

            store[storedIdx++] = result;
        }

        if (remains <= 0) {
            return fn.apply(this, store);
        } else {
            return _arify(Math.max(0, remains), _curryN(length, store, fn));
        }
    };
});
