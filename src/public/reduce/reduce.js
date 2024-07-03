import { _curry3, _reduce } from "../../private";

var reduce = function <T, U>(
    reducer: (acc: U, value: T) => U,
    init: U,
    collection: any
): U {
    return _reduce<T, U>(reducer, init, collection);
};

export default reduce;

const arr = [1, 2, 3, 4, 5];
const reducer = (x: number, y: number) => x + y;

const res = reduce(reducer, 0, arr);
console.log(res);
