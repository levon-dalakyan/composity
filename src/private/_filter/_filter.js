export function _filter(pred, collection) {
    const arr = [];

    for (let i = 0; i < collection.length; i++) {
        if (pred(collection[i])) {
            arr.push(collection[i]);
        }
    }

    return arr;
}
