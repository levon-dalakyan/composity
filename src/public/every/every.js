import { _curry2, _find } from "../../utils";

var every = _curry2(function (pred, collection) {
    return _find((elem) => !pred(elem), collection) === undefined;
});

export default every;
