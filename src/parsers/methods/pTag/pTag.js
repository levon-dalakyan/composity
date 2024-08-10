export function pTag(pattern) {
    return function (iterable) {
        const iterator = iterable[Symbol.iterator]();
        let consumed = "";

        if (typeof pattern === "string") {
            for (const char of pattern) {
                const { value, done } = iterator.next();

                if (done || value !== char) {
                    throw new Error(
                        `Expected "${pattern}" but got "${consumed}${value || ""}"`
                    );
                }

                consumed += value;
            }
        } else if (pattern instanceof RegExp) {
            const { value, done } = iterator.next();

            if (done || !pattern.test(value)) {
                throw new Error(
                    `Expected "${pattern}" but got "${value || ""}"`
                );
            }

            consumed = value;
        } else {
            throw new Error("Tag pattern must be a string or RegExp");
        }

        return { type: "TAG", value: consumed, rest: iterator };
    };
}
