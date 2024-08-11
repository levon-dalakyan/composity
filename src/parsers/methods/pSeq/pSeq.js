import { _makeParser } from "../../utils/_makeParser/_makeParser.js";
import { pTag } from "../pTag/pTag.js";
import { pTake } from "../pTake/pTake.js";

export function pSeq(...parsers) {
    return _makeParser(function (nextValue, saveLastValue) {
        const results = [];

        for (const parser of parsers) {
            try {
                const result = parser({
                    [Symbol.iterator]() {
                        return {
                            next() {
                                return nextValue();
                            },
                        };
                    },
                });

                results.push(result);
            } catch (error) {
                saveLastValue();

                throw error;
            }
        }
        return {
            type: "SEQ",
            value: results.map((r) => r.value),
            children: results,
        };
    });
}

const seq = pSeq(
    pTake("a", { min: 2 }),
    pTag("b"),
    pTag("c"),
    pTag("d"),
    pTake("e")
);

const iterator = "abcdeeefg"[Symbol.iterator]();
try {
    const res = seq(iterator);
} catch (error) {
    console.log(error);
}

console.log(...iterator);

//console.log(res);
//console.log(...res.rest);
