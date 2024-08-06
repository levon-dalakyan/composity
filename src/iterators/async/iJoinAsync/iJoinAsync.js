import { iToArrayAsync } from "../iToArrayAsync/iToArrayAsync.js";

export async function iJoinAsync(iterable, separator = "") {
    return await iToArrayAsync(iterable).then((array) => array.join(separator));
}
