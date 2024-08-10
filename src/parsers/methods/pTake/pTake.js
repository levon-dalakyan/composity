import { pTag } from "../pTag/pTag.js";
import { _makeParser } from "../../utils/_makeParser/_makeParser.js";

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
            throw new Error(
                `Expected at least ${min} "${condition}" but got ${count}`
            );
        }

        return { type: "TAKE", value: consumed };
    });
}

//const digits = pTake(/[0-9]/, { min: 3 });
//
//const res = digits("234434world");
//
//console.log(res);
//console.log(...res.rest);
