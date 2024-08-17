import { _curryN } from "./_curryN";

describe("_curryN", () => {
    test("curries a function with specified arity", () => {
        const fn = (a, b, c, d) => a + b + c + d;
        const curried = _curryN(4, [], fn);

        expect(curried(1, 2, 3, 4)).toBe(10);
        expect(curried(1)(2)(3)(4)).toBe(10);
        expect(curried(1, 2)(3, 4)).toBe(10);
    });
});
