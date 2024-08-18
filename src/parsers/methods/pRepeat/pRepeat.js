import { _ParsingError } from "../../utils";

/**
 * Creates a parser that repeats the given parser a specified number of times.
 * @param {Function} parser - The parser to repeat.
 * @param {Object} [options={}] - Options for repetition.
 * @param {number} [options.min=0] - Minimum number of repetitions.
 * @param {number} [options.max=Infinity] - Maximum number of repetitions.
 * @returns {Function} A parser that repeats the given parser.
 * @throws {_ParsingError} If the number of successful repetitions is less than the minimum.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const twoToFourDigits = pRepeat(digitParser, { min: 2, max: 4 });
 *
 * const result1 = twoToFourDigits("123abc");
 * console.log(result1); // { type: "REPEAT", value: "123", rest: {...} }
 *
 * const result2 = twoToFourDigits("12345abc");
 * console.log(result2); // { type: "REPEAT", value: "1234", rest: {...} }
 *
 * // This will throw an error:
 * // twoToFourDigits("1abc"); // _ParsingError: Expected at least 2 repetitions but got 1
 */
export function pRepeat(parser, options = {}) {
    const { min = 0, max = Infinity } = options;

    return function (iterable) {
        let currentIterable = iterable;
        let consumed = "";
        let lastValue = null;
        let isDone = false;

        let result;
        let i = 0;
        for (; i < max; i++) {
            try {
                result = parser(currentIterable);

                consumed += result.value;
                currentIterable = result.rest;
            } catch (error) {
                lastValue = error.lastValue;
                break;
            }
        }

        if (i < min) {
            throw new _ParsingError(
                `Expected at least ${min} repetitions but got ${i}`,
                { type: "REPEAT" }
            );
        }

        const restIterator = {
            [Symbol.iterator]() {
                let lastYielded = false;

                return {
                    next() {
                        if (isDone) {
                            return { value: undefined, done: true };
                        }

                        if (!lastYielded && lastValue !== null) {
                            lastYielded = true;
                            return { value: lastValue, done: false };
                        }

                        return currentIterable[Symbol.iterator]().next();
                    },
                };
            },
        };

        return {
            type: "REPEAT",
            value: consumed,
            rest: restIterator,
        };
    };
}
