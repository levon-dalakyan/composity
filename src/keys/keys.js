import { _curry1, _objectHas } from "../utils";

var keys = _curry1(function (obj) {
    if (Object(obj) !== obj) {
        return [];
    }

    const _keys = [];

    for (const key in obj) {
        if (_objectHas(key, obj)) {
            _keys.push(key);
        }
    }

    return _keys;
});

export default keys;
