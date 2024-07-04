import { _curry1 } from "../../private";

var head = _curry1(function (collection) {
    if (typeof collection === "string" || Array.isArray(collection)) {
        return collection[0];
    }

    throw new TypeError(
        "Cannot head a received value. Should be an array or a string"
    );
});

export default head;
