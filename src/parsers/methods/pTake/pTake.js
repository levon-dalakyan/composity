import { pTag } from "../pTag/pTag.js";
import { _makeParser } from "../../utils/_makeParser/_makeParser.js";
import { _ParsingError } from "../../utils/_ParsingError/_ParsingError.js";

export function pTake(condition, options = {}) {
    const { min = 0, max = Infinity } = options;

    return _makeParser(function (nextValue, saveLastValue) {
        let consumed = "";
        let count = 0;

        while (count < max) {
            const { value, done } = nextValue();

            if (done) {
                break;
            }

            const tagParser = pTag(condition);
            try {
                tagParser([value]);
                consumed += value;
                count++;
            } catch {
                saveLastValue();
                break;
            }
        }

        if (count < min) {
            throw new _ParsingError(
                `Expected at least ${min} to be matched but got ${count}`,
                { type: "TAKE" }
            );
        }

        return { type: "TAKE", value: consumed };
    });
}

//const digits = pTake((value) => typeof +value === value, { min: 1 });
//
//const res = digits("world");
//
//console.log(res);
//console.log(...res.rest);
