export function pTag(condition) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let consumed = "";

        if (typeof condition === "string") {
            for (const char of condition) {
                const { value, done } = iterator.next();

                if (done || value !== char) {
                    throw new Error(
                        `Expected "${condition}" but got "${consumed}${value || ""}"`
                    );
                }

                consumed += value;
            }
        } else if (condition instanceof RegExp) {
            const { value, done } = iterator.next();

            if (done || !condition.test(value)) {
                throw new Error(
                    `Expected "${condition}" but got "${value || ""}"`
                );
            }

            consumed = value;
        } else if (condition instanceof Function) {
            const { value, done } = iterator.next();

            if (done || !condition(value)) {
                throw new Error(
                    `Expected to match condition "${condition.toString()}", but got "${value || ""}"`
                );
            }

            consumed = value;
        } else {
            throw new Error("Tag condition must be a string or RegExp");
        }

        return { type: "TAG", value: consumed, rest: iterator };
    };
}

//const zeroParser = pTag((value) => value === "4");
//
//const res = zeroParser("123");
//console.log(res);
//console.log(...res.rest);
