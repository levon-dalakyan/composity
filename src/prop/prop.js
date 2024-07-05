import { _curry2, _isInteger, _nth } from "../utils";

var prop = _curry2(function (key, obj) {
    return _isInteger(key) ? _nth(key, obj) : obj[key];
});

export default prop;
