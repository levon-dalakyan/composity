import { _ParsingError } from "../../utils";

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
