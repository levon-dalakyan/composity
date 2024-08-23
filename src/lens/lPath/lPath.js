import { lCompose } from "../lCompose";
import { lIndex } from "../lIndex";
import { lLens } from "../lLens";

export function lPath(...props) {
    return props.reduce(
        (acc, prop) => {
            if (typeof prop === "number") {
                return lCompose(acc, lIndex(prop));
            } else {
                return lCompose(acc, lProp(prop));
            }
        },
        lLens(
            (x) => x,
            (_, x) => x
        )
    );
}
