import { _reduce } from "../utils";

export function pipe(...fns) {
    return function (arg) {
        return _reduce(fns, (v, fn) => fn(v), arg);
    };
}
