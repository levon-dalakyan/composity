import { lView } from "../lView";
import { lPath } from "../lPath";

export function lGetPath(obj, pathArray) {
    lView(lPath(...pathArray), obj);
}
