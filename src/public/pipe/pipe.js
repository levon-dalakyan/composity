import { _reduce } from "../../private";

export function pipe(...fns) {
    return function (arg) {
        return _reduce((v, fn) => fn(v), arg, fns);
    };
}
