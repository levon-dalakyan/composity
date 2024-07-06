import { _curry2, _find } from "../../utils";

var every = _curry2(function (pred, coll) {
    return _find((elem) => !pred(elem), coll) === undefined;
});

export default every;
