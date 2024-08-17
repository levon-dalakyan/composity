import { jest } from "@jest/globals";
import { _arify } from "./_arify";

describe("_arify", () => {
    test("creates a function with specified arity", () => {
        const originalFn = (...args) => args.length;
        const arified0 = _arify(0, originalFn);
        const arified3 = _arify(3, originalFn);

        expect(arified0.length).toBe(0);
        expect(arified3.length).toBe(3);
    });

    test("delegates to original function", () => {
        const originalFn = jest.fn();
        const arified = _arify(2, originalFn);
        arified(1, 2, 3);
        expect(originalFn).toHaveBeenCalledWith(1, 2, 3);
    });

    test("throws error for invalid arity", () => {
        expect(() => _arify(16, () => {})).toThrow(
            "Invalid arity: 16. Expected 0 - 15."
        );
    });
});
