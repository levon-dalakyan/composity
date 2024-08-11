import { pTag } from "../pTag/pTag.js";
import { pRepeat } from "../pRepeat/pRepeat.js";

export function pOr(...parsers) {
    return function (iterable) {
        let result;

        for (const parser of parsers) {
            try {
                result = parser(iterable);
                break;
            } catch (error) {
                continue;
            }
        }

        if (result) {
            return {
                type: "OR",
                value: result.value,
                rest: result.rest,
            };
        } else {
            throw new Error("All alternative parsers failed");
        }
    };
}

//const or = pOr(pTag("a"), pRepeat(pTag("b"), { min: 2 }));
//
//const res = or("bbd");
//console.log(res);
//console.log(...res.rest);
