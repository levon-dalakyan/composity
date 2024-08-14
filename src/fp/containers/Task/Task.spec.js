import { Task } from "./Task";

describe("Task", () => {
    describe("Constructor and basic methods", () => {
        test("fork executes the Task computation", (done) => {
            const task = new Task((resolve) => {
                setTimeout(() => resolve(42), 10);
            });
            task.fork(
                (value) => {
                    expect(value).toBe(42);
                    done();
                },
                (error) => {
                    done(error);
                }
            );
        });

        test("toPromise converts Task to Promise", async () => {
            const task = new Task((resolve) => resolve(42));
            const result = await task.toPromise();
            expect(result).toBe(42);
        });
    });

    describe("Functor laws", () => {
        test("map preserves identity", (done) => {
            const task = Task.of(5);
            const mapped = task.map((x) => x);
            task.fork((value1) => {
                mapped.fork((value2) => {
                    expect(value1).toBe(value2);
                    done();
                }, done);
            }, done);
        });

        test("map preserves composition", (done) => {
            const task = Task.of(5);
            const f = (x) => x * 2;
            const g = (x) => x + 1;
            const mapped1 = task.map((x) => f(g(x)));
            const mapped2 = task.map(g).map(f);
            mapped1.fork((value1) => {
                mapped2.fork((value2) => {
                    expect(value1).toBe(value2);
                    done();
                }, done);
            }, done);
        });
    });

    describe("Applicative laws", () => {
        test("of method creates a Task that returns the given value", (done) => {
            const task = Task.of(5);
            task.fork((value) => {
                expect(value).toBe(5);
                done();
            }, done);
        });

        test("ap applies functions in Task values", (done) => {
            const taskFn = Task.of((x) => x * 2);
            const task = Task.of(5);
            task.ap(taskFn).fork((value) => {
                expect(value).toBe(10);
                done();
            }, done);
        });
    });

    describe("Monad laws", () => {
        test("chain behaves correctly", (done) => {
            const task = Task.of(5);
            const f = (x) => Task.of(x * 2);
            task.chain(f).fork((value) => {
                expect(value).toBe(10);
                done();
            }, done);
        });

        test("left identity", (done) => {
            const f = (x) => Task.of(x * 2);
            const value = 5;
            const task1 = Task.of(value).chain(f);
            const task2 = f(value);
            task1.fork((value1) => {
                task2.fork((value2) => {
                    expect(value1).toBe(value2);
                    done();
                }, done);
            }, done);
        });

        test("right identity", (done) => {
            const task = Task.of(5);
            const chained = task.chain(Task.of);
            task.fork((value1) => {
                chained.fork((value2) => {
                    expect(value1).toBe(value2);
                    done();
                }, done);
            }, done);
        });
    });

    describe("Bifunctor laws", () => {
        test("bimap applies the correct function", (done) => {
            const task = new Task((resolve, reject) => reject("error"));
            task.bimap(
                (x) => x * 2,
                (x) => x + "!"
            ).fork(
                () => done(new Error("Should not resolve")),
                (error) => {
                    expect(error).toBe("error!");
                    done();
                }
            );
        });
    });
});
