import { iToArrayAsync } from "../iToArrayAsync";

export function iJoinAsync(separator = "") {
    return async function (iterable) {
        return await iToArrayAsync(iterable).then((array) =>
            array.join(separator)
        );
    };
}
