import { _reduceIterator } from "./_reduceIterator";

describe("_reduceIterator", () => {
    test("reduces iterator correctly", () => {
        function* generator() {
            yield 1;
            yield 2;
            yield 3;
        }
        expect(_reduceIterator((acc, val) => acc + val, 0, generator())).toBe(
            6
        );
    });
});
