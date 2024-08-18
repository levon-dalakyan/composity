import { _ParsingError } from "../../utils";

/**
 * Creates a parser that tries multiple parsers in order, succeeding if any of them succeed.
 * @param {...Function} parsers - The parsers to try.
 * @returns {Function} A parser that succeeds if any of the given parsers succeed.
 * @throws {_ParsingError} If all parsers fail.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const letterParser = pTag(/[a-z]/i);
 * const digitOrLetterParser = pOr(digitParser, letterParser);
 *
 * const result1 = digitOrLetterParser("1abc");
 * console.log(result1); // { type: "OR", value: "1", rest: {...} }
 *
 * const result2 = digitOrLetterParser("abc");
 * console.log(result2); // { type: "OR", value: "a", rest: {...} }
 *
 * // This will throw an error:
 * // digitOrLetterParser("_abc"); // _ParsingError: All alternative parsers failed
 */
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
