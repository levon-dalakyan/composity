export function createIterableIterator(value) {
    const iterator = value[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            return iterator.next();
        },
    };
}

export function createAsyncIterableIterator(value) {
    const iterator = value[Symbol.asyncIterator]();

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        next() {
            return iterator.next();
        },
    };
}
