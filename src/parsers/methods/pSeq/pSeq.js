import { _makeParser } from "../../utils/_makeParser/_makeParser.js";
import { pTag } from "../pTag/pTag.js";
import { pTake } from "../pTake/pTake.js";

export function pSeq(...parsers) {
    return function (iterable) {
        let currentIterable = iterable;
        let consumed = "";

        for (const parser of parsers) {
            const result = parser(currentIterable);

            if (result.value !== null) {
                consumed += result.value;
            }
            currentIterable = result.rest;
        }

        return {
            type: "SEQ",
            value: consumed,
            rest: currentIterable,
        };
    };
}

//const seq = pSeq(
//    pTake("a", { min: 1 }),
//    pTag("b"),
//    pTag("c"),
//    pTag("d"),
//    pTake("e", { max: 2 })
//);
//
//const iterator = "abcdeeefg";
//try {
//    const res = seq(iterator);
//    console.log(res);
//
//    console.log(pTag("e")(res.rest));
//
//    console.log(...res.rest);
//} catch (error) {
//    console.log(error);
//}
