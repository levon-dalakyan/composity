import { _reduce } from "../../utils";
import reverse from "../../reverse/reverse";

export function compose(...fns) {
    return function (arg) {
        return _reduce(reverse(fns), (v, fn) => fn(v), arg);
    };
}
