import { _curry1, _objectHas } from "../utils";

var memoize = _curry1(function (fn) {
    const cashe = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (!_objectHas(key, cashe)) {
            cashe[key] = fn.apply(this, args);
        }

        return cashe[key];
    };
});

export default memoize;
