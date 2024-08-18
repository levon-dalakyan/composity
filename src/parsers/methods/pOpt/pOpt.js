/**
 * Creates a parser that optionally applies the given parser.
 * @param {Function} parser - The parser to apply optionally.
 * @returns {Function} A parser that optionally applies the given parser.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const optDigitParser = pOpt(digitParser);
 * const result1 = optDigitParser("1abc");
 * console.log(result1); // { type: "OPT", value: "1", rest: {...} }
 *
 * const result2 = optDigitParser("abc");
 * console.log(result2); // { type: "OPT", value: null, rest: {...} }
 */
export function pOpt(parser) {
    return function (iterable) {
        try {
            const result = parser(iterable);

            return {
                type: "OPT",
                value: result.value,
                rest: result.rest,
            };
        } catch (error) {
            return {
                type: "OPT",
                value: null,
                rest: iterable,
            };
        }
    };
}
