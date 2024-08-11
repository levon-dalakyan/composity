import { _makeParser, _ParsingError } from "../../utils";
import { pTag } from "../pTag";

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
