import { _createAsyncIterable } from "../../utils";
import { iPipeAsync } from "./iPipeAsync";

describe("iPipeAsync", () => {
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

    test("should pipe async functions correctly", async () => {
        const piped = iPipeAsync(iAddOneAsync, iDoubleAsync);
        const result = [];
        for await (const item of piped(_createAsyncIterable([1, 2, 3]))) {
            result.push(item);
        }
        expect(result).toEqual([4, 6, 8]);
    });

    test("should handle empty input", async () => {
        const piped = iPipeAsync(iAddOneAsync, iDoubleAsync);
        const result = [];
        for await (const item of piped(_createAsyncIterable([]))) {
            result.push(item);
        }
        expect(result).toEqual([]);
    });

    test("should return original iterable when no functions are provided", async () => {
        const piped = iPipeAsync();
        const result = [];
        for await (const item of piped(_createAsyncIterable([1, 2, 3]))) {
            result.push(item);
        }
        expect(result).toEqual([1, 2, 3]);
    });
});
