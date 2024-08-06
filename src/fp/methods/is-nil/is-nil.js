import { _curry1 } from "../utils";

var isNil = _curry1(function (value) {
    return value == null;
});

export default isNil;
