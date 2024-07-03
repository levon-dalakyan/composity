export function _reverseArray(collection) {
    const reversed = [];

    for (let i = collection.length - 1; i >= 0; i--) {
        reversed.push(collection[i]);
    }

    return reversed;
}
