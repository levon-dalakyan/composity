import { _reduceIterator } from "./_reduceIterator";

describe("_reduceIterator", () => {
    it("should reduce an iterator", () => {
        const iterator = [1, 2, 3][Symbol.iterator]();
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceIterator(iterator, reducer, 0);
        expect(result).toBe(6);
    });

    it("should reduce an object with a next method", () => {
        const obj = {
            index: 0,
            next: function () {
                if (this.index < 3) {
                    return { value: [1, 2, 3][this.index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceIterator(obj, reducer, 0);
        expect(result).toBe(6);
    });

    it("should handle an empty iterator", () => {
        const iterator: Iterator<number> = {
            next: () => ({ value: undefined, done: true }),
        };
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceIterator(iterator, reducer, 0);
        expect(result).toBe(0);
    });
});
