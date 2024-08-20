import { _createAsyncIterable } from "../../utils";
import { iComposeAsync } from "./iComposeAsync";

describe("iComposeAsync", () => {
    const iDoubleAsync = (iterable) => ({
        async *[Symbol.asyncIterator]() {
            for await (const item of iterable) {
                yield item * 2;
            }
        },
    });

    const iAddOneAsync = (iterable) => ({
        async *[Symbol.asyncIterator]() {
            for await (const item of iterable) {
                yield item + 1;
            }
        },
    });

    test("should compose async functions correctly", async () => {
        const composed = iComposeAsync(iDoubleAsync, iAddOneAsync);
        const result = [];
        for await (const item of composed(_createAsyncIterable([1, 2, 3]))) {
            result.push(item);
        }
        expect(result).toEqual([4, 6, 8]);
    });

    test("should handle empty input", async () => {
        const composed = iComposeAsync(iDoubleAsync, iAddOneAsync);
        const result = [];
        for await (const item of composed(_createAsyncIterable([]))) {
            result.push(item);
        }
        expect(result).toEqual([]);
    });

    test("should return original iterable when no functions are provided", async () => {
        const composed = iComposeAsync();
        const result = [];
        for await (const item of composed(_createAsyncIterable([1, 2, 3]))) {
            result.push(item);
        }
        expect(result).toEqual([1, 2, 3]);
    });
});
