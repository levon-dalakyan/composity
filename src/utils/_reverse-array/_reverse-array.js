export function _reverseArray(coll) {
    const reversed = [];

    for (let i = coll.length - 1; i >= 0; i--) {
        reversed.push(coll[i]);
    }

    return reversed;
}
