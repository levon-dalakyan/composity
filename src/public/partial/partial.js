var partial = _curry2(function partial(fn, ...args) {
    return _arify(Math.max(0, fn.length - args.length), function (...nextArgs) {
        return fn.call(this, ...args, ...nextArgs);
    });
});

export default partial;
