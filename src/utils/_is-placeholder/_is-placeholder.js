export function _isPlaceholder(arg) {
    return (
        typeof arg === "object" &&
        arg !== null &&
        arg["@@composize/placeholder"] === true
    );
}
