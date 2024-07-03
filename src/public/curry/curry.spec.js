import { curry } from "./curry";

describe("curry", () => {
    test("should curry a function with a single argument", () => {
        const add = (a: number) => a + 1;
        const curriedAdd = curry(add);

        expect(curriedAdd(1)).toEqual(2);
    });

    test("should curry a function with multiple arguments", () => {
        const add = (a: number, b: number, c: number) => a + b + c;
        const curriedAdd = curry(add);

        expect(curriedAdd(1)(2)(3)).toEqual(6);
        expect(curriedAdd(1, 2)(3)).toEqual(6);
        expect(curriedAdd(1)(2, 3)).toEqual(6);
    });

    test("should preserve the context of the original function", () => {
        const context = { foo: "bar" };
        const mockFn = jest.fn();
        const fn = curry(mockFn);
        fn.call(context, 1);
        expect(mockFn).toHaveBeenCalledWith(1);
        expect(mockFn.mock.instances[0]).toBe(context);
    });
});
