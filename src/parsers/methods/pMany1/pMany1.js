import { pRepeat } from "../pRepeat";

/**
 * Creates a parser that applies the given parser one or more times.
 * @param {Function} parser - The parser to repeat.
 * @returns {Function} A parser that applies the given parser one or more times.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const manyDigitsParser1 = pMany1(digitParser);
 * const result1 = manyDigitsParser1("123abc");
 * console.log(result1); // { type: "REPEAT", value: "123", rest: {...} }
 *
 * // This will throw an error:
 * // manyDigitsParser1("abc"); // _ParsingError: Expected at least 1 repetitions but got 0
 */
export function pMany1(parser) {
    return pRepeat(parser, { min: 1 });
}
