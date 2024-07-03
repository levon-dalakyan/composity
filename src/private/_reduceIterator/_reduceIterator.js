export function _reduceIterator(iter, reducer, init) {
    let acc = init;

    let curr = iter.next();

    while (curr.done === false) {
        acc = reducer(acc, curr.value);

        curr = iter.next();
    }

    return acc;
}
