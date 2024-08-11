import { _ParsingError } from "../../utils";

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
