import { lSet } from "../Set";
import { lPath } from "../Path";

export function lSetPath(obj, pathArray, value) {
    return lSet(lPath(...pathArray), value, obj);
}
