import { curryN } from "./curryN";

describe("curryN", () => {
    test("should curry a function with specified arity", () => {
        const add = (a, b, c) => a + b + c;
        const curriedAdd = curryN(3, add);

        expect(curriedAdd(1)(2)(3)).toBe(6);
        expect(curriedAdd(1, 2)(3)).toBe(6);
        expect(curriedAdd(1)(2, 3)).toBe(6);
        expect(curriedAdd(1, 2, 3)).toBe(6);
    });
});
