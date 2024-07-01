import { _isPlaceholder } from "../_isPlaceholder";
import { _curry1 } from "../_curry1";
import { _curry2 } from "../_curry2";

export function _curry3<F extends (...args: any) => any>(fn: F) {
    return function curried(this: ThisParameterType<F>, ...args: any) {
        if (arguments.length === 0) {
            return curried;
        }

        if (arguments.length === 1) {
            if (_isPlaceholder(args[0])) {
                return curried;
            }

            return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                fn.call(this, args[0], _b, _c)
            );
        }

        if (arguments.length === 2) {
            if (_isPlaceholder(args[0]) && _isPlaceholder(args[1])) {
                return curried;
            }

            if (_isPlaceholder(args[0])) {
                return _curry2((_a: Parameters<F>[0], _c: Parameters<F>[2]) =>
                    fn.call(this, _a, args[1], _c)
                );
            }

            if (_isPlaceholder(args[1])) {
                return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                    fn.call(this, args[0], _b, _c)
                );
            }

            return _curry1((_c: Parameters<F>[2]) =>
                fn.call(this, args[0], args[1], _c)
            );
        }

        if (
            _isPlaceholder(args[0]) &&
            _isPlaceholder(args[1]) &&
            _isPlaceholder(args[2])
        ) {
            return curried;
        }

        if (_isPlaceholder(args[0]) && _isPlaceholder(args[1])) {
            return _curry2((_a: Parameters<F>[0], _b: Parameters<F>[1]) =>
                fn.call(this, _a, _b, args[2])
            );
        }

        if (_isPlaceholder(args[0]) && _isPlaceholder(args[2])) {
            return _curry2((_a: Parameters<F>[0], _c: Parameters<F>[2]) =>
                fn.call(this, _a, args[1], _c)
            );
        }

        if (_isPlaceholder(args[1]) && _isPlaceholder(args[2])) {
            return _curry2((_b: Parameters<F>[1], _c: Parameters<F>[2]) =>
                fn.call(this, args[0], _b, _c)
            );
        }

        if (_isPlaceholder(args[0])) {
            return _curry1((_a: Parameters<F>[0]) =>
                fn.call(this, _a, args[1], args[2])
            );
        }

        if (_isPlaceholder(args[1])) {
            return _curry1((_b: Parameters<F>[1]) =>
                fn.call(this, args[0], _b, args[2])
            );
        }

        if (_isPlaceholder(args[2])) {
            return _curry1((_c: Parameters<F>[2]) =>
                fn.call(this, args[0], args[1], _c)
            );
        }

        return fn.call(this, args[0], args[1], args[2]);
    };
}
