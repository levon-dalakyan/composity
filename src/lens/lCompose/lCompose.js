export function lCompose(...lenses) {
    return lenses.reduce(
        (acc, lens) => {
            return {
                getter: (obj) => lens.getter(acc.getter(obj)),
                setter: (value, obj) =>
                    acc.setter(lens.setter(value, acc.getter(obj)), obj),
            };
        },
        {
            getter: (x) => x,
            setter: (_, x) => x,
        }
    );
}
