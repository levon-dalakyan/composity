import { pRepeat } from "../pRepeat";

export function pMany1(parser) {
    return pRepeat(parser, { min: 1 });
}
