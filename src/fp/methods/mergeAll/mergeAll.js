import { curry } from "../curry";
import { _curry2, _reduce } from "../../utils";

export const mergeAll = curry(function (...objs) {
    return _reduce(
        objs,
        (merged, obj) => {
            if (Object(obj) === obj) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        merged[key] = obj[key];
                    }
                }
            }

            return merged;
        },
        {}
    );
});
