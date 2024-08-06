import { _curry1 } from "../utils";
import keys from "../keys/keys";

var values = _curry1(function (obj) {
    const objKeys = keys(obj);

    const _values = [];

    for (let i = 0; i < objKeys.length; i++) {
        _values.push(obj[objKeys[i]]);
    }

    return _values;
});

export default values;
