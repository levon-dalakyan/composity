import { _curry2, _find } from "../utils";

var some = _curry2(function (pred, collection) {
    return _find(pred, collection) !== undefined;
});

export default some;