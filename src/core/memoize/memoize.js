import { _curry1 } from "../utils";

var memoize = _curry1(function (fn) {
    const cashe = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (!cashe.hasOwnProperty(key)) {
            cashe[key] = fn.apply(this, args);
        }

        return cashe[key];
    };
});

export default memoize;
