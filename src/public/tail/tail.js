import { _curry1 } from "../../utils";

var tail = _curry1(function (collection) {
    if (typeof collection === "string" || Array.isArray(collection)) {
        return collection.slice(1);
    }

    throw new TypeError(
        "Cannot tail a received value. Should be an array or a string"
    );
});

export default tail;
