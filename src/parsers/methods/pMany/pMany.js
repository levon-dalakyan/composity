import { pRepeat } from "../pRepeat";

export function pMany(parser) {
    return pRepeat(parser, { min: 0 });
}
