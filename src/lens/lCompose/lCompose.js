import { lLens } from "../lLens";
import { lView } from "../lView";
import { lSet } from "../lSet";

export function lCompose(lens1, lens2) {
    return lLens(
        (obj) => lView(lens2, lView(lens1, obj)),
        (value, obj) => lSet(lens1, lSet(lens2, value, lView(lens1, obj)), obj)
    );
}
