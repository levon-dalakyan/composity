export class _ParsingError extends Error {
    constructor(message, { lastValue } = {}) {
        super(message);
        this.lastValue = lastValue;
    }
}
