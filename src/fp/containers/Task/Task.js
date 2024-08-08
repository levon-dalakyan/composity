/**
 * Represents a Task monad for handling asynchronous computations.
 * @class
 * @implements {Functor}
 * @implements {Apply}
 * @implements {Applicative}
 * @implements {Chain}
 * @implements {Monad}
 * @implements {Bifunctor}
 */
export class Task {
    /**
     * Creates an instance of Task.
     * @param {function(function(*): void, function(*): void): void} computation - A function representing an asynchronous computation.
     */
    constructor(computation) {
        this.computation = computation;
    }

    /**
     * Executes the Task, calling resolve on success or reject on failure.
     * @param {function(*): void} resolve - Function to call with the successful result.
     * @param {function(*): void} reject - Function to call with the failure reason.
     */
    fork(resolve, reject) {
        this.computation(resolve, reject);
    }

    /**
     * Converts the Task to a Promise.
     * @returns {Promise<*>} A Promise that resolves or rejects based on the Task's computation.
     */
    toPromise() {
        return new Promise((resolve, reject) => {
            this.fork(resolve, reject);
        });
    }

    /**
     * Maps a function over this Task.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    map(fn) {
        return this["fantasy-land/map"](fn);
    }

    /**
     * Applies the function inside another Task to the value inside this Task.
     * @param {Task} other - Another Task instance.
     * @returns {Task} A new Task instance.
     */
    ap(other) {
        return this["fantasy-land/ap"](other);
    }

    /**
     * Chains this Task with a function that returns a Task.
     * @param {function(*): Task} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    chain(fn) {
        return this["fantasy-land/chain"](fn);
    }

    /**
     * Maps both sides of this Task.
     * @param {function(*): *} f - Function to apply to success value.
     * @param {function(*): *} g - Function to apply to failure value.
     * @returns {Task} A new Task instance.
     */
    bimap(f, g) {
        return this["fantasy-land/bimap"](f, g);
    }

    /**
     * Creates a Task that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Task} A new Task instance.
     */
    static of(value) {
        return Task["fantasy-land/of"](value);
    }

    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    ["fantasy-land/map"](fn) {
        return new Task((resolve, reject) =>
            this.computation((x) => resolve(fn(x)), reject)
        );
    }

    /**
     * Fantasy-land compliant ap method.
     * @param {Task} other - Another Task instance.
     * @returns {Task} A new Task instance.
     */
    ["fantasy-land/ap"](other) {
        return this.chain((x) => other.map((f) => f(x)));
    }

    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Task} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    ["fantasy-land/chain"](fn) {
        return new Task((resolve, reject) =>
            this.computation((x) => fn(x).fork(resolve, reject), reject)
        );
    }

    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} f - Function to apply to success value.
     * @param {function(*): *} g - Function to apply to failure value.
     * @returns {Task} A new Task instance.
     */
    ["fantasy-land/bimap"](f, g) {
        return new Task((resolve, reject) => {
            this.computation(
                (x) => resolve(f(x)),
                (x) => reject(g(x))
            );
        });
    }

    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Task} A new Task instance.
     */
    static ["fantasy-land/of"](value) {
        return new Task((resolve) => resolve(value));
    }
}
