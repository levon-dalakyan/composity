export class _ParsingError extends Error {
    constructor(message, { type, lastValue } = {}) {
        super(message);
        this.type = type;
        this.lastValue = lastValue;
    }
}
