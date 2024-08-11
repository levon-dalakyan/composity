import { pRepeat } from "../pRepeat/pRepeat.js";

export function pMany1(parser) {
    return pRepeat(parser, { min: 1 });
}
