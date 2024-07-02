export type NextObjResult<T> = {
    value?: T;
    done: boolean;
};

export type NextObj<T> = {
    next: () => NextObjResult<T>;
};
