import { pTake } from "../pTake/pTake.js";
import { pSeq } from "../pSeq/pSeq.js";

export function pEnd() {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        const { value, done } = iterator.next();

        if (!done) {
            throw new Error(`Expected end of input but found: ${value}`);
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

//const parser = pSeq(pTake("a"), pEnd());
//const res = parser("aaa");
//
//console.log(res);
//console.log(...res.rest);
