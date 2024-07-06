import { _curry1, _isArray } from "../utils";

var tail = _curry1(function (coll) {
    if (typeof coll === "string" || _isArray(coll)) {
        return coll.slice(1);
    }

    throw new TypeError(
        "Cannot tail a received value. Should be an array or a string"
    );
});

export default tail;
