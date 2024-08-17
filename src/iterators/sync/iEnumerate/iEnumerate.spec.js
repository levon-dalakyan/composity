import { iEnumerate } from "./iEnumerate";

describe("iEnumerate", () => {
    test("enumerates elements with index", () => {
        const result = [...iEnumerate(["a", "b", "c"])];
        expect(result).toEqual([
            [0, "a"],
            [1, "b"],
            [2, "c"],
        ]);
    });

    test("works with empty iterable", () => {
        const result = [...iEnumerate([])];
        expect(result).toEqual([]);
    });
});
