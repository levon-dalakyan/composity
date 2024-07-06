import { _curry2, _find } from "../utils";

var some = _curry2(function (pred, coll) {
    return _find(pred, coll) !== undefined;
});

export default some;
