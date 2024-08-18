/**
 * Creates an async iterator that sequentially yields elements from multiple async iterables.
 * @param {...AsyncIterable} iterables - The input async iterables.
 * @returns {AsyncIterator} An async iterator that yields elements from all input iterables in sequence.
 *
 * @example
 * const numbers = async function*() { yield* [1, 2, 3]; };
 * const letters = async function*() { yield* ['a', 'b', 'c']; };
 * const combined = iSeqAsync(numbers(), letters());
 * for await (const item of combined) {
 *   console.log(item);
 * }
 * // Output: 1, 2, 3, 'a', 'b', 'c'
 */
export function iSeqAsync(...iterables) {
    const iterators = iterables.map((iterable) =>
        iterable[Symbol.asyncIterator]()
    );
    let cursor = 0;

    return {
        [Symbol.asyncIterator]() {
            return this;
        },

        async next() {
            if (cursor === iterators.length) {
                return {
                    value: undefined,
                    done: true,
                };
            }

            const current = await iterators[cursor].next();

            if (current.done) {
                cursor++;
                return await this.next();
            }

            return current;
        },
    };
}
