export function iCompose(...fns: any[]): (iterable: any) => {
    [Symbol.iterator](): {
        next(): any;
    };
};
