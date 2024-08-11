import { pTag } from "../pTag/pTag.js";
import { pRepeat } from "../pRepeat/pRepeat.js";
import { pSeq } from "../pSeq/pSeq.js";

export function pOpt(parser) {
    return function (iterable) {
        try {
            const result = parser(iterable);

            return {
                type: "OPT",
                value: result.value,
                rest: result.rest,
            };
        } catch (error) {
            return {
                type: "OPT",
                value: null,
                rest: iterable,
            };
        }
    };
}

//const seq = pSeq(pOpt(pTag("a")), pRepeat(pTag("b")));
//
//const res = seq("abbc");
//console.log(res);
//console.log(...res.rest);
