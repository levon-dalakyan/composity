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
export class Task implements Functor, Apply, Applicative, Chain, Monad, Bifunctor {
    /**
     * Creates a Task that will return the given value.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Task} A new Task instance.
     */
    static of(value: any): Task;
    /**
     * Fantasy-land compliant of method.
     * @static
     * @param {*} value - The value to wrap.
     * @returns {Task} A new Task instance.
     */
    static "fantasy-land/of"(value: any): Task;
    /**
     * Creates an instance of Task.
     * @param {function(function(*): void, function(*): void): void} computation - A function representing an asynchronous computation.
     */
    constructor(computation: (arg0: (arg0: any) => void, arg1: (arg0: any) => void) => void);
    computation: (arg0: (arg0: any) => void, arg1: (arg0: any) => void) => void;
    /**
     * Executes the Task, calling resolve on success or reject on failure.
     * @param {function(*): void} resolve - Function to call with the successful result.
     * @param {function(*): void} reject - Function to call with the failure reason.
     */
    fork(resolve: (arg0: any) => void, reject: (arg0: any) => void): void;
    /**
     * Converts the Task to a Promise.
     * @returns {Promise<*>} A Promise that resolves or rejects based on the Task's computation.
     */
    toPromise(): Promise<any>;
    /**
     * Maps a function over this Task.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    map(fn: (arg0: any) => any): Task;
    /**
     * Applies the function inside another Task to the value inside this Task.
     * @param {Task} other - Another Task instance.
     * @returns {Task} A new Task instance.
     */
    ap(other: Task): Task;
    /**
     * Chains this Task with a function that returns a Task.
     * @param {function(*): Task} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    chain(fn: (arg0: any) => Task): Task;
    /**
     * Maps both sides of this Task.
     * @param {function(*): *} f - Function to apply to success value.
     * @param {function(*): *} g - Function to apply to failure value.
     * @returns {Task} A new Task instance.
     */
    bimap(f: (arg0: any) => any, g: (arg0: any) => any): Task;
    /**
     * Fantasy-land compliant map method.
     * @param {function(*): *} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    "fantasy-land/map"(fn: (arg0: any) => any): Task;
    /**
     * Fantasy-land compliant ap method.
     * @param {Task} other - Another Task instance.
     * @returns {Task} A new Task instance.
     */
    "fantasy-land/ap"(other: Task): Task;
    /**
     * Fantasy-land compliant chain method.
     * @param {function(*): Task} fn - Function to apply.
     * @returns {Task} A new Task instance.
     */
    "fantasy-land/chain"(fn: (arg0: any) => Task): Task;
    /**
     * Fantasy-land compliant bimap method.
     * @param {function(*): *} f - Function to apply to success value.
     * @param {function(*): *} g - Function to apply to failure value.
     * @returns {Task} A new Task instance.
     */
    "fantasy-land/bimap"(f: (arg0: any) => any, g: (arg0: any) => any): Task;
}
