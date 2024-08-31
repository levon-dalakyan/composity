/**
 * Creates a lens for a nested path in an object.
 * @param {...(string|number)} props - The properties or indices that make up the path.
 * @returns {Object} A lens for the specified path.
 *
 * @example
 * const data = { user: { friends: ['Alice', 'Bob'] } };
 * const firstFriendLens = lPath('user', 'friends', 0);
 * console.log(lView(firstFriendLens, data)); // 'Alice'
 * console.log(lSet(firstFriendLens, 'Charlie', data));
 * // { user: { friends: ['Charlie', 'Bob'] } }
 */
export function lPath(...props: (string | number)[]): any;
