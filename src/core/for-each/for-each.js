import { _curry2 } from "../utils";

var forEach = _curry2(function (fn, coll) {
    for (let i = 0; i < coll.length; i++) {
        fn(coll[i]);
    }

    return coll;
});

export default forEach;
