import { _curry3, _reduce } from "../../utils";

var reduce = _curry3(function (reducer, init, collection) {
    return _reduce(reducer, init, collection);
});

export default reduce;
