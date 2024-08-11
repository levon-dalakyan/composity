import { pTag } from "../pTag/pTag.js";
import { pRepeat } from "../pRepeat/pRepeat.js";
import { _ParsingError } from "../../utils/_ParsingError/_ParsingError.js";

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
            throw new _ParsingError("All alternative parsers failed", {
                type: "OR",
            });
        }
    };
}

//const or = pOr(pTag("a"), pRepeat(pTag("b"), { min: 2 }));
//
//const res = or("cbbd");
//console.log(res);
//console.log(...res.rest);
