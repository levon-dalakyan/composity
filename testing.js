import { iCompose, iFilter, iMap, iSlice, iTake } from "./dist/index.js";

const numbers = function* () {
    let i = 1;
    while (true) yield i++;
};

const getTenEvenDoubled = iCompose(
    iTake(10),
    iMap((x) => x * 2),
    iFilter((x) => x % 2 === 0),
    iSlice(0, 100)
);

const iterator = getTenEvenDoubled(numbers());

console.log(...iterator); // Output: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40
