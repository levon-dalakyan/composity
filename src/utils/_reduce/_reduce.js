import { _createReduce } from "../_createReduce";
import { _reduceArray } from "../_reduceArray";
import { _reduceByMethod } from "../_reduceByMethod";
import { _reduceIterator } from "../_reduceIterator";

export var _reduce = _createReduce(
    _reduceArray,
    _reduceIterator,
    _reduceByMethod
);
