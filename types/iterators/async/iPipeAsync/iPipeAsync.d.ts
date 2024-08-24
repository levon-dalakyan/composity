export function iPipeAsync(...fns: any[]): (iterable: any) => {
    [Symbol.asyncIterator](): {
        next(): Promise<any>;
    };
};
