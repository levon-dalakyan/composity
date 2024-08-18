import { _ParsingError } from "../../utils";

/**
 * Creates a parser that matches a specific condition.
 * @param {string|RegExp|Function} condition - The condition to match.
 * @returns {Function} A parser that matches the given condition.
 * @throws {_ParsingError} If the input doesn't match the condition.
 *
 * @example
 * const digitParser = pTag(/\d/);
 * const result1 = digitParser("123");
 * console.log(result1); // { type: "TAG", value: "1", rest: {...} }
 *
 * const letterAParser = pTag("a");
 * const result2 = letterAParser("abc");
 * console.log(result2); // { type: "TAG", value: "a", rest: {...} }
 *
 * const evenDigitParser = pTag(x => x % 2 === 0);
 * const result3 = evenDigitParser("2");
 * console.log(result3); // { type: "TAG", value: "2", rest: {...} }
 *
 * // This will throw an error:
 * // digitParser("a"); // _ParsingError: Expected "[0-9]" but got "a"
 */
export function pTag(condition) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let consumed = "";

        if (typeof condition === "string") {
            for (const char of condition) {
                const { value, done } = iterator.next();

                if (done || value !== char) {
                    throw new _ParsingError(
                        `Expected "${condition}" but got "${consumed}${value || ""}"`,
                        { type: "TAG", lastValue: value }
                    );
                }

                consumed += value;
            }
        } else if (condition instanceof RegExp) {
            const { value, done } = iterator.next();

            if (done || !condition.test(value)) {
                throw new _ParsingError(
                    `Expected "${condition}" but got "${value || ""}"`,
                    { type: "TAG", lastValue: value }
                );
            }

            consumed = value;
        } else if (condition instanceof Function) {
            const { value, done } = iterator.next();

            if (done || !condition(value)) {
                throw new _ParsingError(
                    `Expected to match condition "${condition.toString()}", but got "${value || ""}"`,
                    { type: "TAG", lastValue: value }
                );
            }

            consumed = value;
        } else {
            throw new _ParsingError(
                "Tag condition must be a string, RegExp or function",
                { type: "TAG" }
            );
        }

        return {
            type: "TAG",
            value: consumed,
            rest: { [Symbol.iterator]: () => iterator },
        };
    };
}
