import { KeyValueList } from "./KeyValueList";

describe("KeyValueList", () => {
    describe("Constructor and basic methods", () => {
        test("constructor creates an empty KeyValueList", () => {
            const kvl = new KeyValueList();
            expect(kvl.size).toBe(0);
        });

        test("constructor creates a KeyValueList from entries", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            expect(kvl.size).toBe(2);
            expect(kvl.get("a")).toBe(1);
            expect(kvl.get("b")).toBe(2);
        });

        test("get returns correct values", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            expect(kvl.get("a")).toBe(1);
            expect(kvl.get("c")).toBeUndefined();
        });

        test("has checks for key existence", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            expect(kvl.has("a")).toBe(true);
            expect(kvl.has("c")).toBe(false);
        });

        test("set adds or updates a key-value pair", () => {
            const kvl = new KeyValueList([["a", 1]]);
            const newKvl = kvl.set("b", 2);
            expect(newKvl.get("b")).toBe(2);
            expect(kvl.has("b")).toBe(false); // Original should be unchanged
        });

        test("delete removes a key-value pair", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const newKvl = kvl.delete("a");
            expect(newKvl.has("a")).toBe(false);
            expect(kvl.has("a")).toBe(true); // Original should be unchanged
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const identity = (x) => x;
            expect(kvl.map(identity).equals(kvl)).toBe(true);
        });

        test("map preserves composition", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            expect(kvl.map((x) => f(g(x))).equals(kvl.map(g).map(f))).toBe(
                true
            );
        });
    });

    describe("Apply and Applicative laws", () => {
        test("ap applies functions in KeyValueList", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const fns = new KeyValueList([
                ["a", (x) => x * 2],
                ["b", (x) => x + 1],
            ]);
            const result = kvl.ap(fns);
            expect(result.get("a")).toBe(2);
            expect(result.get("b")).toBe(3);
        });
    });

    describe("Chain and Monad laws", () => {
        test("chain behaves correctly", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const f = (x) => new KeyValueList([["result", x * 2]]);
            const result = kvl.chain(f);
            expect(result.get("result")).toBe(4); // Last chained value
        });

        test("of and chain satisfy left identity", () => {
            const f = (x) => new KeyValueList([["result", x * 2]]);
            const x = 5;
            expect(KeyValueList.of(x).chain(f).equals(f(x))).toBe(true);
        });
    });

    describe("Bifunctor laws", () => {
        test("bimap applies functions to keys and values", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const result = kvl.bimap(
                (k) => k.toUpperCase(),
                (v) => v * 2
            );
            expect(result.get("A")).toBe(2);
            expect(result.get("B")).toBe(4);
        });
    });

    describe("Semigroup and Monoid laws", () => {
        test("concat combines two KeyValueLists", () => {
            const kvl1 = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const kvl2 = new KeyValueList([
                ["b", 3],
                ["c", 4],
            ]);
            const result = kvl1.concat(kvl2);
            expect(result.get("a")).toBe(1);
            expect(result.get("b")).toBe(3); // Last value wins
            expect(result.get("c")).toBe(4);
        });

        test("empty returns an empty KeyValueList", () => {
            const empty = KeyValueList.empty();
            expect(empty.size).toBe(0);
        });

        test("concat with empty satisfies identity", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const empty = KeyValueList.empty();
            expect(kvl.concat(empty).equals(kvl)).toBe(true);
            expect(empty.concat(kvl).equals(kvl)).toBe(true);
        });
    });

    describe("Foldable laws", () => {
        test("reduce folds the KeyValueList correctly", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]);
            const sum = kvl.reduce((acc, value) => acc + value, 0);
            expect(sum).toBe(6);
        });
    });

    describe("Setoid laws", () => {
        test("equals compares KeyValueLists correctly", () => {
            const kvl1 = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const kvl2 = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const kvl3 = new KeyValueList([
                ["a", 1],
                ["c", 3],
            ]);
            expect(kvl1.equals(kvl2)).toBe(true);
            expect(kvl1.equals(kvl3)).toBe(false);
        });
    });

    describe("Other methods", () => {
        test("toString returns correct string representation", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            expect(kvl.toString()).toBe('KeyValueList({"a":1,"b":2})');
        });

        test("KeyValueList is iterable", () => {
            const kvl = new KeyValueList([
                ["a", 1],
                ["b", 2],
            ]);
            const entries = [...kvl];
            expect(entries).toEqual([
                ["a", 1],
                ["b", 2],
            ]);
        });
    });
});
