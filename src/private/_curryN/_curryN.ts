import * as _ from "ts-toolbelt";
import { _curry3 } from "../_curry3";
import { _isPlaceholder } from "../_isPlaceholder";

var _curryN = _curry3(function _curryN<F extends (...args: any[]) => any>(
    length: number,
    entrance: Array<any>,
    fn: F
) {
    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        let remains = length;
        const store: Array<any> = [];
        let storedIdx = 0;
        let argsIdx = 0;

        while (storedIdx < entrance.length || argsIdx < args.length) {
            let result: any;
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
            return _curryN(length, store, fn);
        }
    };
});

export default _curryN;
