import { lSet } from "../lSet";
import { lView } from "../lView";

export function lOver(lens, modifier, obj) {
    return lSet(lens, modifier(lView(lens, obj)), obj);
}
