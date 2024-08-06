export function filter(predicate, coll) {
    const arr = [];

    for (let i = 0; i < coll.length; i++) {
        if (predicate(coll[i])) {
            arr.push(coll[i]);
        }
    }

    return arr;
}
