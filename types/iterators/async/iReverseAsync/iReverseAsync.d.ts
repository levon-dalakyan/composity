export function iReverseAsync(iterable: any): {
    [Symbol.asyncIterator](): any;
    next(): Promise<{
        value: any;
        done: boolean;
    }>;
};
