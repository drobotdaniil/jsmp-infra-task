import assert from 'assert';
import replace from '../src/replace';

assert.deepStrictEqual(replace('Lorem ipsum dolor', '!'), 'Lorem!ipsum!dolor');
assert.deepStrictEqual(
  replace('Lorem sia lor mel dosco', ','),
  'Lorem,sia,lor,mel,dosco'
);
assert.deepStrictEqual(replace('Lorem ipsum dolor', '.'), 'Lorem.ipsum.dolor');
