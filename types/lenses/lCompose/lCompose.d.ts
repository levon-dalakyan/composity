/**
 * Composes multiple lenses into a single lens.
 * @param {...Object} lenses - The lenses to compose.
 * @returns {Object} A new lens that is the composition of all input lenses.
 *
 * @example
 * const personLens = lProp('person');
 * const nameLens = lProp('name');
 * const personNameLens = lCompose(personLens, nameLens);
 *
 * const data = { person: { name: 'Alice', age: 30 } };
 * console.log(lView(personNameLens, data)); // 'Alice'
 */
export function lCompose(...lenses: any[]): any;
