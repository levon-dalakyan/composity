import { _reduce } from "../../private";
import reverse from "../reverse/reverse";

export function compose(...fns) {
    return function (arg) {
        return _reduce((v, fn) => fn(v), arg, reverse(fns));
    };
}
