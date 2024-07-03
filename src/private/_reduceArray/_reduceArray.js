export function _reduceArray(arr, reducer, init) {
    let acc = init;

    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i]);
    }

    return acc;
}
