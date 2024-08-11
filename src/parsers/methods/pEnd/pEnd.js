import { pTake } from "../pTake/pTake.js";
import { pSeq } from "../pSeq/pSeq.js";
import { _ParsingError } from "../../utils/_ParsingError/_ParsingError.js";

export function pEnd() {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        const { value, done } = iterator.next();

        if (!done) {
            throw new _ParsingError(
                `Expected end of input but found: ${value}`,
                { type: "END" }
            );
        }

        return {
            type: "END",
            value: null,
            rest: {
                [Symbol.iterator]() {
                    return {
                        next() {
                            return { value: undefined, done: true };
                        },
                    };
                },
            },
        };
    };
}

//const parser = pSeq(pTake("a", { max: 2 }), pEnd());
//const res = parser("aa");
//
//console.log(res);
//console.log(...res.rest);
