export function iReverseAsync(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    const buffer = [];
    let isBufferFull = false;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (!isBufferFull) {
                let current;

                while (!(current = await iterator.next()).done) {
                    buffer.unshift(current.value);
                }

                isBufferFull = true;
            }

            if (buffer.length > 0) {
                return {
                    value: buffer.shift(),
                    done: false,
                };
            }

            return {
                value: undefined,
                done: true,
            };
        },
    };
}
