import { _createAsyncIterable } from "./_createAsyncIterable";

describe("_createAsyncIterable", () => {
    test("creates an async iterable from an array", async () => {
        const array = [1, 2, 3];
        const iterable = _createAsyncIterable(array);

        expect(Symbol.asyncIterator in iterable).toBe(true);

        const iterator = iterable[Symbol.asyncIterator]();
        expect(typeof iterator.next).toBe("function");

        const results = [];
        for await (const value of iterable) {
            results.push(value);
        }

        expect(results).toEqual(array);
    });
});
