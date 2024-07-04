import { _curry2, _find } from "../../utils";

var find = _curry2(function (pred, collection) {
    return _find(pred, collection);
});

export default find;
