export function _isPlaceholder(arg) {
    return (
        typeof arg === "object" &&
        arg !== null &&
        arg["@@functiolize/placeholder"] === true
    );
}
