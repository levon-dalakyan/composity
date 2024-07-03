import { _reduceArray } from "./_reduceArray";

describe("_arrayReduce", () => {
    it("should reduce an array of numbers using a sum reducer function", () => {
        const sumReducer = (acc: number, current: number) => acc + current;
        const array = [1, 2, 3, 4, 5];
        const initialValue = 0;
        const result = _reduceArray(array, sumReducer, initialValue);
        expect(result).toBe(15);
    });

    it("should reduce an array of strings using a concatenation reducer function", () => {
        const concatReducer = (acc: string, current: string) => acc + current;
        const array = ["hello", "world", "!"];
        const initialValue = "";
        const result = _reduceArray(array, concatReducer, initialValue);
        expect(result).toBe("helloworld!");
    });
});
