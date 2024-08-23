import { lLens } from "../lLens";

export function lProp(prop) {
    return lLens(
        (obj) => obj[prop],
        (value, obj) => ({ ...obj, [prop]: value })
    );
}
