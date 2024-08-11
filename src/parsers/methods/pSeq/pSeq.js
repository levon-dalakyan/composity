import { _makeParser } from "../../utils";

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
