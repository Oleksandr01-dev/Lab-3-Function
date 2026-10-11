const test = require('node:test');
const assert = require('node:assert/strict');
const { result } = require('./4-introspection.js');

test('introspection returns method names and parameter counts', () => {
  assert.deepEqual(result, [
    ['m1', 1],
    ['m2', 2],
    ['m3', 3],
  ]);
});