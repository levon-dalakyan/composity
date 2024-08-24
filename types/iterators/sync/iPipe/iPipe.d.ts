export function iPipe(...fns: any[]): (iterable: any) => {
    [Symbol.iterator](): {
        next(): any;
    };
};
