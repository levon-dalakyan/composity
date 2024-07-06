import { _curry1, _isArray } from "../utils";

var head = _curry1(function (coll) {
    if (typeof coll === "string" || _isArray(coll)) {
        return coll[0];
    }

    throw new TypeError(
        "Cannot head a received value. Should be an array or a string"
    );
});

export default head;
