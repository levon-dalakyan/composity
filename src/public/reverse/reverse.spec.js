import reverse from "./reverse";

describe("reverse", () => {
    it("should reverse a string", () => {
        expect(reverse("hello")).toBe("olleh");
    });

    it("should reverse an array", () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it("should reverse an iterable", () => {
        const iterable = {
            *[Symbol.iterator]() {
                yield "a";
                yield "b";
                yield "c";
            },
        };
        expect(reverse(iterable)).toEqual(["c", "b", "a"]);
    });
});
