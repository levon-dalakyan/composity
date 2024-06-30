export function _isPlaceholder(arg: any) {
    return (
        typeof arg === "object" &&
        arg !== null &&
        Object.hasOwn(arg, "@@functiolize/placeholder")
    );
}
