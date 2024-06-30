import { _isPlaceholder } from "../_isPlaceholder";

export function _curry1<F extends (arg: any) => any>(func: F) {
    return function curried(
        this: ThisParameterType<F>,
        arg?: Parameters<F>[0]
    ) {
        if (arguments.length === 0 || _isPlaceholder(arg)) {
            return curried;
        }

        return func.call(this, arg);
    };
}
