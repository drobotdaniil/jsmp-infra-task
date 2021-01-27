import assert from 'assert';
import mult from '../src/mult';

assert.deepStrictEqual(mult([1, 2, 3], 3), [3, 6, 9]);
assert.deepStrictEqual(mult(['1', '2', 3], 3), [3, 6, 9]);
assert.deepStrictEqual(mult(['One', "Two", "Three"], 3), [NaN, NaN, NaN]);
