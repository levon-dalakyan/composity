export function _map(transformer, coll) {
    const arr = [];

    for (let i = 0; i < coll.length; i++) {
        arr.push(transformer(coll[i]));
    }

    return arr;
}
