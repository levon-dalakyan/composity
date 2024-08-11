export function pOpt(parser) {
    return function (iterable) {
        try {
            const result = parser(iterable);

            return {
                type: "OPT",
                value: result.value,
                rest: result.rest,
            };
        } catch (error) {
            return {
                type: "OPT",
                value: null,
                rest: iterable,
            };
        }
    };
}
