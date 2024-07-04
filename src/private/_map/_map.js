export function _map(transformer, collection) {
    const arr = [];

    for (let i = 0; i < collection.length; i++) {
        arr.push(transformer(collection[i]));
    }

    return arr;
}
