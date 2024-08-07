import { _curry2 } from "../../utils";

export const forEach = _curry2(function (fn, coll) {
    for (let i = 0; i < coll.length; i++) {
        fn(coll[i]);
    }

    return coll;
});
