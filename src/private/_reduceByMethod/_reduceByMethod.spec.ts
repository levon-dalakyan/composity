import { _reduceByMethod } from "./_reduceByMethod";

describe("_reduceByMethod", () => {
    it('should reduce an array using the "reduce" method', () => {
        const numbers = [1, 2, 3, 4, 5];
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceByMethod("reduce", numbers, reducer, 0);
        expect(result).toBe(15);
    });

    it('should reduce an array in reverse order using the "reduceRight" method', () => {
        const numbers = [1, 2, 3, 4, 5];
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceByMethod("reduceRight", numbers, reducer, 0);
        expect(result).toBe(15);
    });

    it('should reduce a custom object with a "reduce" method', () => {
        const customObj = {
            data: [1, 2, 3, 4, 5],
            reduce: (
                reducer: (acc: number, value: number) => number,
                init: number
            ) => {
                return customObj.data.reduce(reducer, init);
            },
        };
        const reducer = (acc: number, x: number) => acc + x;
        const result = _reduceByMethod("reduce", customObj, reducer, 0);
        expect(result).toBe(15);
    });
});
