import { _curry3, _reduce } from "../../private";

var reduce = _curry3(function (reducer, init, collection) {
    return _reduce(reducer, init, collection);
});

export default reduce;
