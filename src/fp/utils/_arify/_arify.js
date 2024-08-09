/**
 * Creates a function with a specified arity that delegates to the original function.
 *
 * @function
 * @name _arify
 * @param {number} amount - The desired arity of the resulting function.
 * @param {Function} fn - The function to arify.
 * @returns {Function} A function with the specified arity that calls the original function.
 * @throws {Error} If the specified arity is not between 0 and 15.
 * @description
 * This function creates a wrapper function with a specified number of parameters
 * that delegates to the original function, preserving the `this` context and all arguments.
 */
export function _arify(amount, fn) {
    switch (amount) {
        case 0: return function () { return fn.apply(this, arguments); };
        case 1: return function ($1) { return fn.apply(this, arguments); };
        case 2: return function ($1, $2) { return fn.apply(this, arguments); };
        case 3: return function ($1, $2, $3) { return fn.apply(this, arguments); };
        case 4: return function ($1, $2, $3, $4) { return fn.apply(this, arguments); };
        case 5: return function ($1, $2, $3, $4, $5) { return fn.apply(this, arguments); };
        case 6: return function ($1, $2, $3, $4, $5, $6) { return fn.apply(this, arguments); };
        case 7: return function ($1, $2, $3, $4, $5, $6, $7) { return fn.apply(this, arguments); };
        case 8: return function ($1, $2, $3, $4, $5, $6, $7, $8) { return fn.apply(this, arguments); };
        case 9: return function ($1, $2, $3, $4, $5, $6, $7, $8, $9) { return fn.apply(this, arguments); };
        case 10: return function ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) { return fn.apply(this, arguments); };
        case 11: return function ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) { return fn.apply(this, arguments); };
        case 12: return function ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) { return fn.apply(this, arguments); };
        case 13: return function ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 ) { return fn.apply(this, arguments); };
        case 14: return function ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 ) { return fn.apply(this, arguments); };
        case 15: return function ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15 ) { return fn.apply(this, arguments); };
        default: throw new Error(`Invalid arity: ${amount}. Expected 0 - 15.`);
    }
}
