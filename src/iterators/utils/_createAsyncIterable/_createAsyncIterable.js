export function _createAsyncIterable(array) {
    return {
        [Symbol.asyncIterator]() {
            let i = 0;
            return {
                async next() {
                    if (i < array.length) {
                        return { value: array[i++], done: false };
                    }
                    return { value: undefined, done: true };
                },
            };
        },
    };
}
