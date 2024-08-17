import { _curry1 } from "./_curry1";

describe("_curry1", () => {
    test("curries a function of arity 1", () => {
        const fn = (x) => x + 1;
        const curried = _curry1(fn);

        expect(curried(2)).toBe(3);
        expect(curried()(2)).toBe(3);
    });
});
