export function _filter(pred, coll) {
    const arr = [];

    for (let i = 0; i < coll.length; i++) {
        if (pred(coll[i])) {
            arr.push(coll[i]);
        }
    }

    return arr;
}
