import { UniqueList } from "./UniqueList";

describe("UniqueList", () => {
    describe("Constructor and basic methods", () => {
        test("constructor creates a UniqueList with unique values", () => {
            const list = new UniqueList([1, 2, 2, 3, 3, 3]);
            expect(list.size).toBe(3);
            expect(Array.from(list)).toEqual([1, 2, 3]);
        });

        test("has checks if a value exists in the list", () => {
            const list = new UniqueList([1, 2, 3]);
            expect(list.has(2)).toBe(true);
            expect(list.has(4)).toBe(false);
        });

        test("add adds a new value to the list", () => {
            const list = new UniqueList([1, 2]);
            const newList = list.add(3);
            expect(newList.size).toBe(3);
            expect(Array.from(newList)).toEqual([1, 2, 3]);
        });

        test("delete removes a value from the list", () => {
            const list = new UniqueList([1, 2, 3]);
            const newList = list.delete(2);
            expect(newList.size).toBe(2);
            expect(Array.from(newList)).toEqual([1, 3]);
        });

        test("size returns the number of unique elements", () => {
            const list = new UniqueList([1, 2, 2, 3, 3, 3]);
            expect(list.size).toBe(3);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const list = new UniqueList([1, 2, 3]);
            const mapped = list.map((x) => x);
            expect(mapped.equals(list)).toBe(true);
        });

        test("map preserves composition", () => {
            const list = new UniqueList([1, 2, 3]);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            const mapped1 = list.map((x) => f(g(x)));
            const mapped2 = list.map(g).map(f);
            expect(mapped1.equals(mapped2)).toBe(true);
        });
    });

    describe("Applicative laws", () => {
        test("of method creates a UniqueList with a single value", () => {
            const list = UniqueList.of(5);
            expect(list.size).toBe(1);
            expect(Array.from(list)).toEqual([5]);
        });
    });

    describe("Monad laws", () => {
        test("left identity", () => {
            const a = 5;
            const f = (x) => new UniqueList([x, x + 1]);
            const result1 = UniqueList.of(a).chain(f);
            const result2 = f(a);
            expect(result1.equals(result2)).toBe(true);
        });

        test("right identity", () => {
            const list = new UniqueList([1, 2, 3]);
            const result = list.chain(UniqueList.of);
            expect(result.equals(list)).toBe(true);
        });
    });

    describe("Monoid laws", () => {
        test("concat combines two UniqueList instances", () => {
            const list1 = new UniqueList([1, 2]);
            const list2 = new UniqueList([2, 3]);
            const result = list1.concat(list2);
            expect(Array.from(result)).toEqual([1, 2, 3]);
        });

        test("empty returns an empty UniqueList", () => {
            const empty = UniqueList.empty();
            expect(empty.size).toBe(0);
        });

        test("concat with empty is identity", () => {
            const list = new UniqueList([1, 2, 3]);
            const empty = UniqueList.empty();
            expect(list.concat(empty).equals(list)).toBe(true);
            expect(empty.concat(list).equals(list)).toBe(true);
        });
    });

    describe("Foldable laws", () => {
        test("reduce folds the list correctly", () => {
            const list = new UniqueList([1, 2, 3]);
            const result = list.reduce((acc, x) => acc + x, 0);
            expect(result).toBe(6);
        });
    });

    describe("Filterable laws", () => {
        test("filter removes elements based on predicate", () => {
            const list = new UniqueList([1, 2, 3, 4, 5]);
            const filtered = list.filter((x) => x % 2 === 0);
            expect(Array.from(filtered)).toEqual([2, 4]);
        });
    });

    describe("Setoid laws", () => {
        test("equals checks equality correctly", () => {
            const list1 = new UniqueList([1, 2, 3]);
            const list2 = new UniqueList([1, 2, 3]);
            const list3 = new UniqueList([1, 2, 4]);
            expect(list1.equals(list2)).toBe(true);
            expect(list1.equals(list3)).toBe(false);
        });

        test("reflexivity: a.equals(a) === true", () => {
            const list = new UniqueList([1, 2, 3]);
            expect(list.equals(list)).toBe(true);
        });

        test("symmetry: a.equals(b) === b.equals(a)", () => {
            const list1 = new UniqueList([1, 2, 3]);
            const list2 = new UniqueList([1, 2, 3]);
            expect(list1.equals(list2)).toBe(list2.equals(list1));
        });

        test("transitivity: if a.equals(b) and b.equals(c), then a.equals(c)", () => {
            const list1 = new UniqueList([1, 2, 3]);
            const list2 = new UniqueList([1, 2, 3]);
            const list3 = new UniqueList([1, 2, 3]);
            expect(list1.equals(list2) && list2.equals(list3)).toBe(
                list1.equals(list3)
            );
        });
    });

    describe("Alt laws", () => {
        test("alt combines two UniqueList instances", () => {
            const list1 = new UniqueList([1, 2]);
            const list2 = new UniqueList([2, 3]);
            const result = list1.alt(list2);
            expect(Array.from(result)).toEqual([1, 2, 3]);
        });

        test("associativity: (a.alt(b)).alt(c) === a.alt(b.alt(c))", () => {
            const a = new UniqueList([1, 2]);
            const b = new UniqueList([2, 3]);
            const c = new UniqueList([3, 4]);
            expect(
                a
                    .alt(b)
                    .alt(c)
                    .equals(a.alt(b.alt(c)))
            ).toBe(true);
        });
    });

    describe("Plus laws", () => {
        test("empty is the identity for alt", () => {
            const list = new UniqueList([1, 2, 3]);
            const empty = UniqueList.empty();
            expect(list.alt(empty).equals(list)).toBe(true);
            expect(empty.alt(list).equals(list)).toBe(true);
        });
    });

    describe("Other methods", () => {
        test("toString returns a string representation", () => {
            const list = new UniqueList([1, 2, 3]);
            expect(list.toString()).toBe("UniqueList(1,2,3)");
        });

        test("Symbol.iterator makes UniqueList iterable", () => {
            const list = new UniqueList([1, 2, 3]);
            expect([...list]).toEqual([1, 2, 3]);
        });
    });
});
