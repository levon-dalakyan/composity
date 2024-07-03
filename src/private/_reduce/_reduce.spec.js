import { _reduce } from "./_reduce";

describe("_reduce", () => {
    it("should reduce an array", () => {
        const array = [1, 2, 3, 4, 5];
        const reducer = (acc: number, value: number) => acc + value;
        const init = 0;
        const result = _reduce(array, reducer, init);
        expect(result).toBe(15);
    });

    it("should reduce an iterator", () => {
        const iterator = [1, 2, 3, 4, 5][Symbol.iterator]();
        const reducer = (acc: number, value: number) => acc + value;
        const init = 0;
        const result = _reduce(iterator, reducer, init);
        expect(result).toBe(15);
    });

    it("should reduce an object with a reduce method", () => {
        const obj = {
            value: [1, 2, 3, 4, 5],
            reduce: (
                reducer: (acc: number, value: number) => number,
                init: number
            ) => obj.value.reduce(reducer, init),
        };
        const reducer = (acc: number, value: number) => acc + value;
        const init = 0;
        const result = _reduce(obj, reducer, init);
        expect(result).toBe(15);
    });

    it("should return the initial value if the collection is null or undefined", () => {
        const reducer = (acc: number, value: number) => acc + value;
        const init = 0;
        expect(_reduce(null, reducer, init)).toBe(0);
        expect(_reduce(undefined, reducer, init)).toBe(0);
    });

    it("should throw an error if the collection is not iterable or has no reduce method", () => {
        const reducer = (acc: number, value: number) => acc + value;
        const init = 0;
        expect(() => _reduce(123, reducer, init)).toThrow(
            "Cannot reduce a non-iterable object"
        );
    });
});
