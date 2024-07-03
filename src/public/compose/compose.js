import { reduce } from "../reduce";
import reverse from "../reverse/reverse";

export function compose(...fns) {
    return function (arg) {
        return reduce((v, fn) => fn(v), arg, reverse(fns));
    };
}
