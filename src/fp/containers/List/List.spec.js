import { List } from "./List";

describe("List", () => {
    describe("Constructor and basic methods", () => {
        test("constructor creates an empty List", () => {
            const list = new List();
            expect([...list]).toEqual([]);
        });

        test("constructor creates a List from values", () => {
            const list = new List([1, 2, 3]);
            expect([...list]).toEqual([1, 2, 3]);
        });

        test("toString returns correct string representation", () => {
            const list = new List([1, 2, 3]);
            expect(list.toString()).toBe("List(1,2,3)");
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", () => {
            const list = new List([1, 2, 3]);
            const identity = (x) => x;
            expect(list.map(identity).equals(list)).toBe(true);
        });

        test("map preserves composition", () => {
            const list = new List([1, 2, 3]);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            expect(list.map((x) => f(g(x))).equals(list.map(g).map(f))).toBe(
                true
            );
        });
    });

    describe("Apply and Applicative laws", () => {
        test("ap applies functions in List", () => {
            const fns = new List([(x) => x * 2, (x) => x + 1]);
            const list = new List([1, 2, 3]);
            const result = list.ap(fns);
            expect([...result]).toEqual([2, 2, 4, 3, 6, 4]);
        });

        test("of and ap satisfy identity", () => {
            const list = new List([1, 2, 3]);
            expect(list.ap(List.of((x) => x)).equals(list)).toBe(true);
        });

        test("of and ap satisfy homomorphism", () => {
            const f = (x) => x * 2;
            const x = 5;
            expect(
                List.of(x)
                    .ap(List.of(f))
                    .equals(List.of(f(x)))
            ).toBe(true);
        });

        test("of and ap satisfy interchange", () => {
            const u = List.of((x) => x * 2);
            const y = 5;
            expect(
                List.of(y)
                    .ap(u)
                    .equals(u.ap(List.of((f) => f(y))))
            ).toBe(true);
        });
    });

    describe("Chain and Monad laws", () => {
        test("chain behaves correctly", () => {
            const list = new List([1, 2, 3]);
            const f = (x) => new List([x, x * 2]);
            const result = list.chain(f);
            expect([...result]).toEqual([1, 2, 2, 4, 3, 6]);
        });

        test("of and chain satisfy left identity", () => {
            const f = (x) => new List([x, x * 2]);
            const x = 5;
            expect(List.of(x).chain(f).equals(f(x))).toBe(true);
        });

        test("of and chain satisfy right identity", () => {
            const list = new List([1, 2, 3]);
            expect(list.chain(List.of).equals(list)).toBe(true);
        });

        test("chain satisfies associativity", () => {
            const list = new List([1, 2, 3]);
            const f = (x) => new List([x, x * 2]);
            const g = (x) => new List([x, x + 1]);
            expect(
                list
                    .chain(f)
                    .chain(g)
                    .equals(list.chain((x) => f(x).chain(g)))
            ).toBe(true);
        });
    });

    describe("Semigroup and Monoid laws", () => {
        test("concat combines two Lists", () => {
            const list1 = new List([1, 2]);
            const list2 = new List([3, 4]);
            const result = list1.concat(list2);
            expect([...result]).toEqual([1, 2, 3, 4]);
        });

        test("empty returns an empty List", () => {
            const empty = List.empty();
            expect([...empty]).toEqual([]);
        });

        test("concat with empty satisfies identity", () => {
            const list = new List([1, 2, 3]);
            const empty = List.empty();
            expect(list.concat(empty).equals(list)).toBe(true);
            expect(empty.concat(list).equals(list)).toBe(true);
        });
    });

    describe("Foldable laws", () => {
        test("reduce folds the List correctly", () => {
            const list = new List([1, 2, 3]);
            const sum = list.reduce((acc, value) => acc + value, 0);
            expect(sum).toBe(6);
        });
    });

    describe("Filterable laws", () => {
        test("filter filters the List correctly", () => {
            const list = new List([1, 2, 3, 4, 5]);
            const result = list.filter((x) => x % 2 === 0);
            expect([...result]).toEqual([2, 4]);
        });
    });

    describe("Setoid laws", () => {
        test("equals compares Lists correctly", () => {
            const list1 = new List([1, 2, 3]);
            const list2 = new List([1, 2, 3]);
            const list3 = new List([1, 2, 4]);
            expect(list1.equals(list2)).toBe(true);
            expect(list1.equals(list3)).toBe(false);
        });
    });

    describe("Alt and Plus laws", () => {
        test("alt combines two Lists", () => {
            const list1 = new List([1, 2]);
            const list2 = new List([3, 4]);
            const result = list1.alt(list2);
            expect([...result]).toEqual([1, 2, 3, 4]);
        });

        test("empty and alt satisfy identity", () => {
            const list = new List([1, 2, 3]);
            const empty = List.empty();
            expect(list.alt(empty).equals(list)).toBe(true);
            expect(empty.alt(list).equals(list)).toBe(true);
        });
    });

    describe("Alternative laws", () => {
        test("empty and ap satisfy annihilation", () => {
            const list = new List([1, 2, 3]);
            expect(list.ap(List.empty()).equals(List.empty())).toBe(true);
        });
    });
});
