import { lSet } from "../lSet";
import { lPath } from "../lPath";

export function lSetPath(obj, pathArray, value) {
    return lSet(lPath(...pathArray), value, obj);
}
