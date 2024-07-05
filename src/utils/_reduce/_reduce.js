import { _createReduce } from "../_create-reduce";
import { _reduceArray } from "../_reduce-array";
import { _reduceByMethod } from "../_reduce-by-method";
import { _reduceIterator } from "../_reduce-iterator";

export var _reduce = _createReduce(
    _reduceArray,
    _reduceIterator,
    _reduceByMethod
);
