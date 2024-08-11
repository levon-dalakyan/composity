import { _ParsingError } from "../../utils";

export function pOr(...parsers) {
    return function (iterable) {
        let result;

        for (const parser of parsers) {
            try {
                result = parser(iterable);
                break;
            } catch (error) {
                continue;
            }
        }

        if (result) {
            return {
                type: "OR",
                value: result.value,
                rest: result.rest,
            };
        } else {
            throw new _ParsingError("All alternative parsers failed", {
                type: "OR",
            });
        }
    };
}
