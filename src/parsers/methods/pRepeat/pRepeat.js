import { pTag } from "../pTag/pTag.js";

export function pRepeat(parser, options = {}) {
    const { min = 0, max = Infinity } = options;

    return function (iterable) {
        let currentIterable = iterable;
        let consumed = "";
        let lastValue = null;
        let isDone = false;

        let result;
        let i = 0;
        for (; i < max; i++) {
            try {
                result = parser(currentIterable);

                consumed += result.value;
                currentIterable = result.rest;
            } catch (error) {
                lastValue = error.lastValue;
                break;
            }
        }

        if (i < min) {
            throw new Error(
                `Expected at least ${min} repetitions but got ${i}`
            );
        }

        const restIterator = {
            [Symbol.iterator]() {
                let lastYielded = false;

                return {
                    next() {
                        if (isDone) {
                            return { value: undefined, done: true };
                        }

                        if (!lastYielded && lastValue !== null) {
                            lastYielded = true;
                            return { value: lastValue, done: false };
                        }

                        return currentIterable[Symbol.iterator]().next();
                    },
                };
            },
        };

        return {
            type: "REPEAT",
            value: consumed,
            rest: restIterator,
        };
    };
}

//const repeat = pRepeat(pTag("a"), { min: 3, max: 5 });
//
//const res = repeat("aaaaaabcde");
//console.log(res);
//console.log(...res.rest);
