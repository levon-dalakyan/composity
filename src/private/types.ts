export type NextObjResult<T> = {
    value?: T;
    done: boolean;
};

export type NextObj<T> = {
    next: () => NextObjResult<T>;
};

export type ReduceObj<T> = {
    reduce: (reducer: (acc: T, value: T) => T, init: T) => T;
};
