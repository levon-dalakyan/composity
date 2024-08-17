import { _curry2 } from "./_curry2";

describe("_curry2", () => {
    test("curries a function of arity 2", () => {
        const fn = (x, y) => x + y;
        const curried = _curry2(fn);

        expect(curried(1, 2)).toBe(3);
        expect(curried(1)(2)).toBe(3);
        expect(curried()(1)(2)).toBe(3);
    });
});
