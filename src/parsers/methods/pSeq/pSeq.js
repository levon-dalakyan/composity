import { _makeParser } from "../../utils";

/**
 * Creates a parser that applies a sequence of parsers in order.
 * @param {...Function} parsers - The parsers to apply in sequence.
 * @returns {Function} A parser that applies the given parsers in sequence.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const letterParser = pTag(/[a-z]/i);
 * const digitLetterSeq = pSeq(digitParser, letterParser);
 *
 * const result = digitLetterSeq("1a23b");
 * console.log(result); // { type: "SEQ", value: "1a", rest: {...} }
 *
 * // This will throw an error:
 * // digitLetterSeq("a1"); // _ParsingError: Expected "[0-9]" but got "a"
 */
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
