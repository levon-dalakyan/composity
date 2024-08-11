import { _makeParser } from "../../utils/_makeParser/_makeParser.js";
import { pTag } from "../pTag/pTag.js";
import { pTake } from "../pTake/pTake.js";

export function pSeq(...parsers) {
    return function (iterable) {
        let currentIterable = iterable;
        const values = [];

        for (const parser of parsers) {
            const result = parser(currentIterable);

            currentIterable = result.rest;
            values.push(result.value);
        }

        return {
            type: "SEQ",
            value: values,
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
