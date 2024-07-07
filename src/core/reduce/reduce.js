import { _curry3, _reduce } from "../utils";

var reduce = _curry3(function (reducer, init, coll) {
    return _reduce(reducer, init, coll);
});

export default reduce;
