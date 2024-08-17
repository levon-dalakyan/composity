export function iReverse(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const buffer = [];
    let isBufferFull = false;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (!isBufferFull) {
                let current;

                while (!(current = iterator.next()).done) {
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
