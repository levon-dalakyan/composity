import { _curry2, _find } from "../utils";

export const some = _curry2(function (pred, coll) {
    return _find(pred, coll) !== undefined;
});
