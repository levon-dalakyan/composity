import { _reverseIterator } from "./_reverseIterator";

describe("_reverseIterator", () => {
    test("reverses iterator correctly", () => {
        function* generator() {
            yield 1;
            yield 2;
            yield 3;
        }
        expect(_reverseIterator(generator())).toEqual([3, 2, 1]);
    });
});
