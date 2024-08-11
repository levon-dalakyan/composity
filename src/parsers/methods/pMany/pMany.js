import { pRepeat } from "../pRepeat/pRepeat.js";

export function pMany(parser) {
    return pRepeat(parser, { min: 0 });
}
