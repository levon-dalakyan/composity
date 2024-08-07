import { _curry1 } from "../../utils";

export const clone = _curry1(function clone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = clone(obj[key]);
        }
    }

    return newObj;
});
