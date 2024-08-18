import { _ParsingError } from "../../utils";

/**
 * Creates a parser that expects the end of input.
 * @returns {Function} A parser function that checks for the end of input.
 * @throws {_ParsingError} If the input is not at its end.
 *
 * @example
 * const endParser = pEnd();
 * const result = endParser([]);
 * console.log(result); // { type: "END", value: null, rest: {...} }
 *
 * // This will throw an error:
 * // endParser(['a']); // _ParsingError: Expected end of input but found: a
 */
export function pEnd() {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        const { value, done } = iterator.next();

        if (!done) {
            throw new _ParsingError(
                `Expected end of input but found: ${value}`,
                { type: "END" }
            );
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
