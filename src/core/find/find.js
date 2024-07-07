import { _curry2, _find } from "../../utils";

var find = _curry2(function (pred, coll) {
    return _find(pred, coll);
});

export default find;
