import { _makeParser, _ParsingError } from "../../utils";
import { pTag } from "../pTag";

/**
 * Creates a parser that takes input matching a condition a specified number of times.
 * @param {string|RegExp|Function} condition - The condition to match.
 * @param {Object} [options={}] - Options for taking.
 * @param {number} [options.min=0] - Minimum number of matches.
 * @param {number} [options.max=Infinity] - Maximum number of matches.
 * @returns {Function} A parser that takes input matching the condition.
 * @throws {_ParsingError} If the number of matches is less than the minimum.
 *
 * @example
 * const digitTaker = pTake(/\d/, { min: 2, max: 4 });
 * const result1 = digitTaker("123abc");
 * console.log(result1); // { type: "TAKE", value: "123", rest: {...} }
 *
 * const result2 = digitTaker("12345abc");
 * console.log(result2); // { type: "TAKE", value: "1234", rest: {...} }
 *
 * // This will throw an error:
 * // digitTaker("1abc"); // _ParsingError: Expected at least 2 to be matched but got 1
 */
export function pTake(condition, options = {}) {
    const { min = 0, max = Infinity } = options;

    return _makeParser(function (nextValue, saveLastValue) {
        let consumed = "";
        let count = 0;

        while (count < max) {
            const { value, done } = nextValue();

            if (done) {
                break;
            }

            const tagParser = pTag(condition);
            try {
                tagParser([value]);
                consumed += value;
                count++;
            } catch {
                saveLastValue();
                break;
            }
        }

        if (count < min) {
            throw new _ParsingError(
                `Expected at least ${min} to be matched but got ${count}`,
                { type: "TAKE" }
            );
        }

        return { type: "TAKE", value: consumed };
    });
}
