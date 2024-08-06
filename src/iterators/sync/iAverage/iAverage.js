export function iAverage(iterable) {
    let sum = 0;
    let amount = 0;

    for (const value of iterable) {
        sum += value;
        amount++;
    }

    return amount > 0 ? sum / amount : 0;
}
