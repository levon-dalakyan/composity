import { pRepeat } from "../pRepeat";

/**
 * Creates a parser that applies the given parser zero or more times.
 * @param {Function} parser - The parser to repeat.
 * @returns {Function} A parser that applies the given parser zero or more times.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const manyDigitsParser = pMany(digitParser);
 * const result = manyDigitsParser("123abc");
 * console.log(result); // { type: "REPEAT", value: "123", rest: {...} }
 */
export function pMany(parser) {
    return pRepeat(parser, { min: 0 });
}
