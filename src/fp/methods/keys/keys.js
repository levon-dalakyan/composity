import { _curry1 } from "../utils";

var keys = _curry1(function (obj) {
    if (Object(obj) !== obj) {
        return [];
    }

    const _keys = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            _keys.push(key);
        }
    }

    return _keys;
});

export default keys;