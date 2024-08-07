import { _curry1 } from "../../utils";

export const isNil = _curry1(function (value) {
    return value == null;
});
