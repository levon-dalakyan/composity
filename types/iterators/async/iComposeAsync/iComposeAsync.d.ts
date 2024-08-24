export function iComposeAsync(...fns: any[]): (iterable: any) => {
    [Symbol.asyncIterator](): {
        next(): Promise<any>;
    };
};
