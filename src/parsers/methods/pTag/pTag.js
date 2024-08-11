import { _ParsingError } from "../../utils/_ParsingError/_ParsingError.js";

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
                        { lastValue: value }
                    );
                }

                consumed += value;
            }
        } else if (condition instanceof RegExp) {
            const { value, done } = iterator.next();

            if (done || !condition.test(value)) {
                throw new _ParsingError(
                    `Expected "${condition}" but got "${value || ""}"`,
                    { lastValue: value }
                );
            }

            consumed = value;
        } else if (condition instanceof Function) {
            const { value, done } = iterator.next();

            if (done || !condition(value)) {
                throw new _ParsingError(
                    `Expected to match condition "${condition.toString()}", but got "${value || ""}"`,
                    { lastValue: value }
                );
            }

            consumed = value;
        } else {
            throw new Error("Tag condition must be a string or RegExp");
        }

        return {
            type: "TAG",
            value: consumed,
            rest: { [Symbol.iterator]: () => iterator },
        };
    };
}

//const zeroParser = pTag((value) => value === "4");
//
//const res = zeroParser("123");
//console.log(res);
//console.log(...res.rest);