import { lOver } from "../lOver";
import { lPath } from "../lPath";

export function lModifyPath(obj, pathArray, modifier) {
    return lOver(lPath(...pathArray), modifier, obj);
}
