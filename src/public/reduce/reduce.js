import { _curry3, _reduce } from "../../private";

var reduce = function (reducer, init, collection) {
    return _reduce(reducer, init, collection);
};

export default reduce;
