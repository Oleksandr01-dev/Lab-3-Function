const test = require('node:test');
const assert = require('node:assert/strict');
const { random } = require('./1-random.js');

test('random(min, max) returns an integer in the given range', () => {
  for (let i = 0; i < 100; i++) {
    const value = random(5, 10);

    assert.ok(Number.isInteger(value));
    assert.ok(value >= 5 && value <= 10);
  }
});

test('random(max) uses zero as min', () => {
  for (let i = 0; i < 100; i++) {
    const value = random(10);

    assert.ok(Number.isInteger(value));
    assert.ok(value >= 0 && value <= 10);
  }
});