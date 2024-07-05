import { _curry2, _reduce } from "../utils";
import { curry } from "../curry";

var mergeAll = curry(function (...objs) {
    return _reduce(
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

        {},
        objs
    );
});

export default mergeAll;
