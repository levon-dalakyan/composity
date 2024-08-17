import { _curry3 } from "./_curry3";

describe("_curry3", () => {
    test("curries a function of arity 3", () => {
        const fn = (x, y, z) => x + y + z;
        const curried = _curry3(fn);

        expect(curried(1, 2, 3)).toBe(6);
        expect(curried(1)(2)(3)).toBe(6);
        expect(curried(1, 2)(3)).toBe(6);
        expect(curried(1)(2, 3)).toBe(6);
        expect(curried()(1)(2)(3)).toBe(6);
    });
});
